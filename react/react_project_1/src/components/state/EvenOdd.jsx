import React, { useState } from 'react'
import "./even_odd.css"

// export default function EvenOdd() { // Using Ternary
//     const [num, setNum] = useState(2);
//     const increment = () => setNum(num + 1);
//     return <>
//         <h3>Check if a number is Even or Odd</h3>
//         {num % 2 == 0 ? <div>{num} is Even</div> : <div>{num} is odd</div>}
//         <button className="btn btn-primary" onClick={increment}>Increment</button>
//     </>
// }

export default function EvenOdd() { // Using &&
    const [num, setNum] = useState(2);
    const increment = () => setNum(num + 1);
    return <>
        <h3 style={{color:"purple",border:"3px dotted green"}}>Check if a number is Even or Odd</h3>
        {num % 2 == 0 && <div>{num} is Even</div>}
        {num % 2 !== 0 && <div>{num} is odd</div>}
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </>
}

// export default function EvenOdd() { // Using if-else
//     const [num, setNum] = useState(2);
//     const increment = () => setNum(num + 1);
//     let result = '';
//     if(num%2==0){
//         result = 'Even';
//     }else{
//         result = 'Odd';
//     }
//     return <>
//         <h3>Check if a number is Even or Odd</h3>
//         <div>{num} is {result}</div>
//         <button className="btn btn-primary" onClick={increment}>Increment</button>
//     </>
// }
