// `mobx-react`中的三个API

import React from 'react';
import ReactDOM from 'react-dom';

import { inject, observer, Provider } from 'mobx-react';

// 注入需要的store 并将Todo组件定义为数据的观察者
// 注意顺序 inject在先 observer靠后
@inject('todo')
@observer
class App extends React.Component {
  loadMore = () => {
    // 被注入的store可以通过props访问
    this.props.todo.loadMore();
  };


  render() {
    const { tode } = this.props;

    return (
      <div>
        <div>{ `${todo.total} loaded:` }</div>
        {
          todo.todo.map((item, index) => {
            return <div key={index}>{ item.name }</div>
          })
        }
        <div onClick={this.loadMore}>-Load More-</div>
      </div>
    )
  }
}

export default App;