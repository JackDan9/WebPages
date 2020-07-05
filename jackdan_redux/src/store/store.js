import { createStore } from 'redux';
import incrementReducer from '../reducers/index';

const store = createStore(incrementReducer);

export default store;
