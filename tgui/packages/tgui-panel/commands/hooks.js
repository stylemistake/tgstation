/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { useSelector } from 'common/redux';
import { selectVerbs } from './selectors';

/**
 * @typedef Verb
 * @type {{
 *   name: string,
 *   category: string,
 *   hidden: number,
 * }}
 */

/**
 * @param {any} context
 * @return {{ verbs: Verb[] }}}
 */
export const useCommands = context => {
  const verbs = useSelector(context, selectVerbs);
  return { verbs };
};
