import React, { Component } from 'react';
import Father from '../components/Father';
import { globalContext, globalData, globalActions } from '../global';

const { Provider } = globalContext;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...globalData,
      ...globalActions(this)
    }
  }

  render() {
    return <Provider value={this.state}>
      <div>
        <Father></Father>
      </div>
    </Provider>
  }
}