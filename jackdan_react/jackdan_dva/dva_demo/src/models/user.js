import * as userService from '../services/user';

export default {
  namespace: 'user',
  state: {
    sumResult: 0,
    tableDataSource: []
  },
  reducers: {
    storeCalc(state, { payload }) {
      return {
        ...state,
        sumResult: payload
      }
    },
    storeUserData(state, { payload }) {
      return {
        ...state,
        tableDataSource: payload
      }
    }
  },
  effects: {
    *sumNumTwo({ payload }, { call, put }) {
      // const resp = yield call(); // 调用一个异步请求，一般是api请求，然后又判断resp的返回去put到reducers
      yield put({
        type: 'storeCalc',
        payload: payload
      })
    },
    *getUserData({ payload }, { call, put }) {
      const resp = yield call(userService.getUserData);
      if(resp) {
        yield put({
          type: 'storeUserData',
          payload: resp && resp.data
        })
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/subtract') {
          dispatch({ type: 'sumNumTwo', payload: query });
        }
      });
    },
  },
}