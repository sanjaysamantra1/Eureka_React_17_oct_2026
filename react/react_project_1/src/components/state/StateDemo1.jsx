import React, { useEffect, useState } from 'react'

export default function StateDemo1() {
    // let [StateVariable , Function to update state variable]= useState(initialValue);
    let [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     console.log('Count: ', count);
    // }
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        console.log('Count: ', count);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    useEffect(() => { // called after state update
        console.log('inside useeffect Count: ', count)
    })
    return <>
        <h3>Counter Example</h3>
        <div>count: {count}</div>
        <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
        <button className="btn btn-danger mx-2" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </>
}
