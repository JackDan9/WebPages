import * as types from './mutation_types';

export const selectPlay = function({commit, state}, {list, count}) {
  commit(types.SET_COUNT, count);
}

