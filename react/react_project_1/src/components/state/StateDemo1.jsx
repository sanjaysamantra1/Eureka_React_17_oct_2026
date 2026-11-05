import React, { useState } from 'react';

export default function StateDemo1() {
    // any code written here gets executed in render phase, avoid  DOM manipulation, timers, fetch
    console.log("StateDemo1 re-rendering...", React)
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    // return <>
    //     <h3>Counter Example:{React.version}</h3>
    //     <div>Count:{count}</div>
    //     <button className="btn btn-primary" onClick={increment}>Increment</button>
    // </>

    return React.createElement(
        React.Fragment,
        null,
        React.createElement("h3", null, "Counter Example:", React.version),
        React.createElement("div", null, "Count:", count),
        React.createElement(
            "button",
            { className: "btn btn-primary", onClick: increment },
            "Increment"
        )
    );
}
