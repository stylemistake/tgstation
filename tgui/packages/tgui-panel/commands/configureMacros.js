/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { logger } from 'tgui/logging';
import { focusCommandBar } from './actions';

const CUSTOM_MACROS = [
  {
    name: 'Tab',
    action: focusCommandBar,
  },
];

export const configureMacros = async () => {
  const data = await Byond.winget('default.*');
  const macros = data.default;
  logger.log(macros);
  for (let id of Object.keys(macros)) {
    const { name } = macros[id];
    const customMacro = CUSTOM_MACROS.find(macro => (
      macro.name === name
    ));
    // Replace with a custom macro that emits a message
    if (customMacro?.action) {
      const windowId = window.__windowId__;
      const message = JSON.stringify(customMacro.action());
      const command = `.output ${windowId}:update ${message}`;
      Byond.winset('default.' + id, { command });
    }
  }
};
