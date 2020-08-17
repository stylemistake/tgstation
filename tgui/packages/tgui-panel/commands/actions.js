/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { createAction } from 'common/redux';

export const focusCommandBar = createAction('commands/focusCommandBar');
export const addVerbs = createAction('commands/addVerbs');
export const removeVerbs = createAction('commands/removeVerbs');
