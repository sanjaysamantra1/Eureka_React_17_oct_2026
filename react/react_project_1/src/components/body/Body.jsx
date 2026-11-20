import Addition from "../events/Addition"
import EmployeeForm from "../events/EmployeeForm"
import EventDemo1 from "../events/EventDemo1"
import AdditionDemo1 from "../form/AdditionDemo1"
import AdditionDemo2 from "../form/AdditionDemo2"
import UseEffectDemo1 from "../hooks/UseEffectDemo1"
import UserDetails from "../hooks/UserDetails"
import EmployeeList from "../list/EmployeeList"
import FruitList from "../list/FruitList"
import ProductList from "../list/ProductList"
import UserList from "../list/UserList"
import ParentDemo from "../misc/ParentDemo"
import ProductSearch from "../misc/ProductSearch"
import PureDemo1 from "../misc/PureDemo1"
import PureDemo2 from "../misc/PureDemo2"
import EmployeeCRUD from "../props/EmployeeCRUD"
import Greet from "../props/Greet"
import MyModal from "../props/MyModal"
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
        {/* <UserList /> */}
        {/* <ProductList/> */}
        {/* <Greet name="Harsha" msg="Good Morning" /> */}
        {/* <Greet name="Jeevitesh" msg="Good Evening" /> */}
        {/* <MyModal>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXVfccEOrpSrEXkcWZxVHkNMeTg3ZvkCBvmCuL77O3g&s=10" alt="" />
        </MyModal> */}
        {/* <EmployeeCRUD /> */}
        {/* <EventDemo1/> */}
        {/* <Addition /> */}
        {/* <EmployeeForm/> */}
        {/* <PureDemo1 /> */}
        {/* <PureDemo2/> */}
        {/* <ParentDemo/> */}
        {/* <ProductSearch/> */}
        {/* <UseEffectDemo1 /> */}
        {/* <UserDetails/> */}
        <AdditionDemo1 />
        <hr/>
        <AdditionDemo2/>
    </div>
}