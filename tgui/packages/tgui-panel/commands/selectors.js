/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { toArray } from 'common/collections';

export const selectVerbs = state => toArray(state.commands.verbByName);
