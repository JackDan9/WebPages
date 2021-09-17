import React, { Component } from 'react';
import Person from '../Person'

class People extends Component {
  constructor() {
    super()
    this.state = {
      name: 'jackdan',
      age: 27,
      height: 185
    }
  }

  render() {
    return (
      <Person name={this.state.name} age={this.state.age} height={this.state.height}></Person>
    )
  }
}

export default People