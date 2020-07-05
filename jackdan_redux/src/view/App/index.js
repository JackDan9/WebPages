import React from "react";
import { connect } from "react-redux";
import { increment } from "../../actions/index";


class App extends React.Component {
    
    constructor(props) {
        super(props);
    }

    onClick() {
        debugger;
        this.props.dispatch(increment());
    }

    render() {
        return (
            <div>
                <div>
                    Current Number: {this.props.number}
                    <button onClick={() => this.onClick()}>点击+1</button> 
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        number: state.number
    })
)(App);
