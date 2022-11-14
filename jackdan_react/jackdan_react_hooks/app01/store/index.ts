import { action, autorun, computed, makeObservable, observable } from 'mobx';

export interface StoreType {
  count: number,
  addCount: Function,
  reduceCount: Function
};

class Store<StoreType> {
  constructor() {
    makeObservable(this);
  }

  @observable count: number = 0;
  
  @action addCount():void {
    this.count++;
  }

  @action reduceCount():void {
    this.count--;
  }

  @computed get countNum() {
    return this.count;
  }
}

export default new Store();