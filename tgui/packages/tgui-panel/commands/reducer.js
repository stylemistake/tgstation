/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { addVerbs, removeVerbs } from './actions';

const initialState = {
  verbByName: {},
};

export const commandsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === addVerbs.type) {
    const verbByName = { ...state.verbByName };
    for (let verb of payload) {
      verbByName[verb.name] = verb;
    }
    return {
      ...state,
      verbByName,
    };
  }
  if (type === removeVerbs.type) {
    const verbByName = { ...state.verbByName };
    for (let verb of payload) {
      delete verbByName[verb.name];
    }
    return {
      ...state,
      verbByName,
    };
  }
  return state;
};
