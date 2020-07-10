import { observable, action, autorun, computed } from 'mobx';


class TodoList {
  id = Math.random();
  @observable title = "";
  @observable finish = false;
  
  @action handleTitle = () => {
    
  }
}