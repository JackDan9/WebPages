import * as types from './mutation_types';

const mutations = {
  [types.SET_COUNT](state, count) {
    state.count = count;
  }
};

export default mutations;