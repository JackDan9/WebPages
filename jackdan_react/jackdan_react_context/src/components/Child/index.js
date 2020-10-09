import React, { Component } from 'react';
import { globalContext } from '../../global';

// 消费者
const { Consumer } = globalContext;

export default class Child extends Component {
  constructor(props) {
    super(props)
  }

  handleAdd() {
    this.context.add()
  }

  render() {
    return (
      <div className="child">
        <h2>我是Child</h2>
        <h3 style={{color: "black"}}>{this.context.a}</h3>
        <Consumer>
          {
            value => <h3 style={{color: 'red'}}>{value.a}</h3>
          }
        </Consumer>
        <button onClick={this.handleAdd.bind(this)}>点我加1</button>
      </div>
    )
  }
}

Child.contextType = globalContext;