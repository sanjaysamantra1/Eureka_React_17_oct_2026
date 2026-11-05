import { useState } from 'react'

export default function StateDemo1() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return <>
        <h3>Counter Example</h3>
        <div>Count:0</div>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </>
}
