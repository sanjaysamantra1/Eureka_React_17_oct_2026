import React, { useState } from 'react'

export default function PureDemo2() {
    const [courseName, setCourseName] = useState('ReactJS');
    const updateCourseName = () => {
        setCourseName('ReactJS');
        // setCourseName('Angular');
    }
    return <div>
        {console.log('PureDemo2 Rendering...')}
        <div>Pure Demo 2</div>
        <h2>Course Name: {courseName}</h2>
        <button onClick={updateCourseName}>
            Update Course Name
        </button>
    </div>
}
// Every Functional component is pure by default