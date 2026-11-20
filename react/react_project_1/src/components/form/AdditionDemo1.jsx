import React, { useState } from 'react'

export default function AdditionDemo1() {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(20);

    const num1ChangeHandler = (event) => {
        setNum1(event.target.value)
    }
    const num2ChangeHandler = (event) => {
        setNum2(event.target.value)
    }
    return <>
        <h3>Add 2 Numbers(Controlled Form)</h3>

        <p>
            Number-1: <input type='number' value={num1} onChange={num1ChangeHandler} />
        </p>
        <p>
            Number-2: <input type='number' value={num2} onChange={num2ChangeHandler} />
        </p>
        <div>Addition of {num1} & {num2} is {+num1 + +num2}</div>
    </>
}
