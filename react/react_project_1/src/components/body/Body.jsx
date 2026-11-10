import EmployeeList from "../list/EmployeeList"
import FruitList from "../list/FruitList"
import UserList from "../list/UserList"
import ConditionalCSS from "../state/ConditionalCSS"
import CounterDemo1 from "../state/CounterDemo1"
import CounterDemo2 from "../state/CounterDemo2"
import EvenOdd from "../state/EvenOdd"
import StateDemo1 from "../state/StateDemo1"

export default function Body() {
    return <div style={{ minHeight: "300px" }} id="body">
        {/* This is Body Component */}
        {/* <StateDemo1/> */}
        {/* <CounterDemo1/> */}
        {/* <CounterDemo2/> */}
        {/* <EvenOdd/> */}
        {/* <ConditionalCSS/> */}
        {/* <FruitList/> */}
        {/* <EmployeeList/> */}
        <UserList />
    </div>
}