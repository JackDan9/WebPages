import React from 'react';


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h3>Cliked me: {this.state.count} times</h3>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
            </div>
        )
    }
}

export default Example;