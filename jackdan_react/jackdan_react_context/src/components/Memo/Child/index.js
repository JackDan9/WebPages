import React, { Component, PureComponent } from 'react';

// export default class Child extends Component {
export default class Child extends PureComponent {
  constructor(props) {
    super(props)
  }

  // 通过属性判断的方式去判断子组件是否刷新
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.name === this.props.name) {
  //     return false;
  //   }
  //   console.log(nextProps.name, this.props.name);
  //   return true;
  // }

  render() {
    console.log('Child render');
    return (
      <div>
        <h2>Child</h2>
      </div>
    )
  }
}