/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { focusWindow } from 'tgui/focus';
import { logger } from 'tgui/logging';
import { focusCommandBar } from './actions';

export const commandsMiddleware = store => next => action => {
  const { type, payload } = action;
  if (type === focusCommandBar.type) {
    logger.log('focusing the command bar');
    focusWindow();
    setImmediate(() => {
      const node = document.querySelector('.CommandBar__input');
      node.focus();
    });
    return;
  }
  return next(action);
};
