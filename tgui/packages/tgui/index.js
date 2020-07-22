/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

// Polyfills
import 'core-js/es';
import 'core-js/web/immediate';
import 'core-js/web/queue-microtask';
import 'core-js/web/timers';
import 'regenerator-runtime/runtime';
import './polyfills/html5shiv';
import './polyfills/ie8';
import './polyfills/dom4';
import './polyfills/css-om';
import './polyfills/inferno';

// Themes
import './styles/main.scss';
import './styles/themes/abductor.scss';
import './styles/themes/cardtable.scss';
import './styles/themes/hackerman.scss';
import './styles/themes/malfunction.scss';
import './styles/themes/ntos.scss';
import './styles/themes/paper.scss';
import './styles/themes/retro.scss';
import './styles/themes/syndicate.scss';

import { perf } from 'common/perf';
import { setupHotReloading } from 'tgui-dev-server/link/client';
import { selectBackend } from './backend';
import { logger } from './logging';
import { createRenderer } from './renderer';
import { createStore, StoreProvider } from './store';

perf.mark('inception', window.__inception__);
perf.mark('init');

const store = createStore();

const renderApp = createRenderer(() => {
  const { getRoutedComponent } = require('./routes');
  const Component = getRoutedComponent(store);
  return (
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>
  );
});

const setupApp = () => {
  // Delay setup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApp);
    return;
  }

  // Augment fatal errors with extra info
  window.__augmentStack__ = (error, stack) => {
    // Get last state for debugging purposes
    const backendState = selectBackend(store.getState());
    // Send to development server
    logger.log('FatalError:', error || stack);
    // Append this data to the stack
    stack += '\nState: ' + JSON.stringify({
      config: backendState.config,
      suspended: backendState.suspended,
      suspending: backendState.suspending,
    });
    // Return an updated stack
    return stack;
  };

  // Subscribe for Redux state updates
  store.subscribe(renderApp);

  // Subscribe for bankend updates
  window.update = messageJson => {
    // NOTE: messageJson can be an object only if called manually from console.
    // This is useful for debugging tgui in external browsers, like Chrome.
    const message = typeof messageJson === 'string'
      ? Byond.parseJson(messageJson)
      : messageJson;
    // Pass the message directly to the store
    store.dispatch(message);
  };

  // Enable hot module reloading
  if (module.hot) {
    setupHotReloading();
    module.hot.accept([
      './components',
      './layouts',
      './routes',
    ], () => {
      renderApp();
    });
  }

  // Process the early update queue
  while (true) {
    let stateJson = window.__updateQueue__.shift();
    if (!stateJson) {
      break;
    }
    window.update(stateJson);
  }
};

setupApp();
