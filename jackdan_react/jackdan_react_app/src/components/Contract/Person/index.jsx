import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.age}</li>
        <li>{this.props.height}</li>
      </ul>
    )
  }
}

export default Person;