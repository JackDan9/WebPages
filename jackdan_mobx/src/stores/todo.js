/**
 * MobX为现有的数据结构(如对象, 数组和类实例)添加了可观察的功能。
 * 通过使用@observable装饰器(ES.next)来给你的类属性添加注解就可以简单地完成这一切。
 * 
 */
import { observable, autorun, computed, extendObservable, action } from 'mobx';


class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}