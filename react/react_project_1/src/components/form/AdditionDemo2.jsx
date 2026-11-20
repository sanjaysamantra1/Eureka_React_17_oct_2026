import React, { useRef, useState } from 'react'

export default function AdditionDemo2() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    const addition = () => {
        const value1 = parseInt(inputRef1.current.value);
        const value2 = parseInt(inputRef2.current.value);
        console.log(`Addition of ${value1} & ${value2} is: ${value1 + value2}`)
    }

    return <>
        <h3>Add 2 Numbers(UnControlled Form)</h3>

        <p>
            Number-1: <input type='number' ref={inputRef1} />
        </p>
        <p>
            Number-2: <input type='number' ref={inputRef2} />
        </p>
        <button className="btn btn-primary" onClick={addition}>Add</button>
    </>
}
