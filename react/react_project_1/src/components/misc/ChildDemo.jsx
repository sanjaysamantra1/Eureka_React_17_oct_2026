import React from "react";

function ChildDemo(props) {
    console.log('Child rendering...')
    return <>
        <div>Child Component</div>
        <div>courseName:{props.courseName}</div>
    </>
}
// export default ChildDemo;
export default React.memo(ChildDemo);
