import React, { Component } from 'react';
import Child from '../Child';

export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // handleClick() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  callback = () => {
    
  }

  render() {
    console.log("Father render");
    return (
      <div>
        {/* <Child name={this.state.count} ></Child> */}
        {/* <Child cb={() => this.callback()}></Child> */}
        <Child cb={this.callback}></Child>
        <h1>Father</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>点我加一</button>
      </div>
    )
  }
}