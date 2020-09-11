import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const log = () => {
        setTimeout(() => {
            console.log(`count刚开始是0, 之后的conut是`, count);
        }, 3000);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                log();
                setCount(3);
            }}>Click Me</button>
        </div>
    )
}

export default App;