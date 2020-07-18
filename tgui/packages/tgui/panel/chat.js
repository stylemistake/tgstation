window.__chat__ = {};

export const chat = window.__chat__;

chat.mount = element => {
  chat.rootElement = element;
};

export const chatMiddleware = store => next => action => {
  const { type, payload } = action;
  if (type === 'chat/message') {
    if (chat.rootElement) {
      const element = document.createElement('div');
      element.innerHTML = payload.text;
      chat.rootElement.append(element);
      element.scrollIntoView();
    }
    return;
  }
  return next(action);
};
