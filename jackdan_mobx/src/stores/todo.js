/**
 * MobX为现有的数据结构(如对象, 数组和类实例)添加了可观察的功能。
 * 通过使用@observable装饰器(ES.next)来给你的类属性添加注解就可以简单地完成这一切。
 * 
 */
import { observable, autorun, computed, extendObservable, action } from 'mobx';


class Todo {
  // id = Math.random();
  // @observable title = "";
  // @observable finished = false;
  // todo是一个被观察的数据对象
  @observable todo = [
    {
      name: 'doing',
    }
  ];


  // loadMore是一个用于操作数据的方法
  @action loadMore() {
    // 模拟异步请求
    setTimeout(() => {
      this.todo = [
        ...this.todo,
        {
          name: 'new schedule',
        }
      ];
    }, 3000);
  }

  // 数据发生变化时自动更新total的值
  @computed get total() {
    return this.todo.length;
  }
}

export default new Todo();