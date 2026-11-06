import React, { useState, Fragment } from 'react';

export default function CounterDemo1() {
    // var count = 0;   // Local Variable
    // const increment = () => {
    //     count = count + 1;
    //     console.log('count: ', count)
    // }

    const [count, setCount] = useState(0); // State Variable
    const increment = () => {
        setCount(count + 1);
    }
    return <Fragment>
        <h3>Counter Example</h3>
        <div>Count:{count}</div>
        <button className="btn btn-primary" onClick={increment}>Increment</button>

        {/* <i className="bi-alarm"></i>
        <i className="bi-airplane" style={{ fontSize: "2rem", color: "cornflowerblue" }}></i> */}
    </Fragment>
}