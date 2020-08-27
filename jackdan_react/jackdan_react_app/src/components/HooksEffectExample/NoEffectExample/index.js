import React from 'react';


class NoEffectExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <h2>You clicked {this.state.count} times</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me</button>
            </div>
        )
    }
}

export default NoEffectExample;