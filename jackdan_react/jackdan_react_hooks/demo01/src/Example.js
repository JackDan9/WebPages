import React, { Component, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked { count }</p>
      <button onClick={() => {setCount(count + 1)}}>Click Me</button>
    </div>
  )
}
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }
//   }

//   render() {
//     return (
//       <div>
//         <p>You Clicked {this.state.count}</p>
//         <button onClick={this.addCount.bind(this)}>Click Me</button>
//       </div>
//     )
//   }
//   addCount() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
// }

export default Example;