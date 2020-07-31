import { perf } from 'common/perf';
import { storage } from 'common/storage';
import { createLogger } from 'tgui/logging';
import { changeChatPage, loadChat, updateMessageCount } from './actions';
import { MAX_PERSISTED_MESSAGES, SAVE_INTERVAL } from './constants';
import { chatRenderer, createReconnectedMessage, serializeMessage } from './renderer';
import { selectChat } from './selectors';

const logger = createLogger('chat/middleware');

const saveChatToStorage = store => {
  perf.mark('chat/save/start');
  const state = selectChat(store.getState());
  const fromIndex = Math.max(0,
    chatRenderer.messages.length - MAX_PERSISTED_MESSAGES);
  const messages = chatRenderer.messages
    .slice(fromIndex)
    .filter(message => message.type !== 'internal')
    .map(message => serializeMessage(message));
  perf.mark('chat/save/storage');
  storage.set('chat-state', state);
  storage.set('chat-messages', messages);
  perf.mark('chat/save/finish');
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('chat saving took', perf.measure(
      'chat/save/start',
      'chat/save/storage'));
    logger.debug('out of which wasted on storage', perf.measure(
      'chat/save/storage',
      'chat/save/finish'));
  }
};

const loadChatFromStorage = async store => {
  logger.log('loading');
  perf.mark('chat/load/start');
  storage.get('chat-state').then(state => {
    perf.mark('chat/load/loadedState');
    if (!state) {
      return;
    }
    store.dispatch(loadChat(state));
    perf.mark('chat/load/finishState');
    logger.debug('load state took', perf.measure(
      'chat/load/start',
      'chat/load/finishState'));
    logger.debug('out of which is retrieving', perf.measure(
      'chat/load/start',
      'chat/load/loadedState'));
  });
  storage.get('chat-messages').then(messages => {
    perf.mark('chat/load/loadedMessages');
    if (!messages) {
      return;
    }
    chatRenderer.processBatch([
      ...messages,
      createReconnectedMessage(),
    ]);
    perf.mark('chat/load/finishMessages');
    logger.debug('load messages took', perf.measure(
      'chat/load/start',
      'chat/load/finishMessages'));
    logger.debug('out of which is retrieving', perf.measure(
      'chat/load/start',
      'chat/load/loadedMessages'));
  });
};

export const chatMiddleware = store => {
  let initialized = false;
  chatRenderer.events.on('batchProcessed', countByType => {
    store.dispatch(updateMessageCount(countByType));
  });
  setInterval(() => saveChatToStorage(store), SAVE_INTERVAL);
  return next => action => {
    const { type, payload } = action;
    if (!initialized) {
      initialized = true;
      loadChatFromStorage(store);
      return next(action);
    }
    if (type === 'chat/message') {
      // Normalize the payload
      const batch = Array.isArray(payload) ? payload : [payload];
      chatRenderer.processBatch(batch);
      return;
    }
    if (type === changeChatPage.type) {
      const { page } = payload;
      chatRenderer.changePage(page);
      return next(action);
    }
    if (type === 'roundrestart') {
      // Save chat as soon as possible
      saveChatToStorage(store);
      return next(action);
    }
    return next(action);
  };
};
