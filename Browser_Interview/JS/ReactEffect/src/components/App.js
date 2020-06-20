import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../assets/logo.png';
import "../styles/index.less";

// export default class App extends Component {

//     render () {
//         return (
//             <div>
//                 <img src={Icon} />
//                 <p>React Demo</p>
//             </div>
//         );
//     }
// }

function App () {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        document.title = `You clicked double ${count1} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <p>You clicked {count1} times</p>

            <button onClick={() => setCount(count1 + 1)}>
                Click me1
            </button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));