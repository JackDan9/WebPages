import React, { Component } from 'react';
import Child from '../Child';

export default class Father extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="father">
        <h1>我是Father</h1>
        <Child></Child>
      </div>
    )
  }
}

