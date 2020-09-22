import * as types from './mutation_types';

export const setCount = function({commit, state}, {count}) {
  commit(types.SET_COUNT, count);
}

