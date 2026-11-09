import React from 'react'

export default function FruitList() {
    let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];

    return <>
        <h3>Fruit List:</h3>
        <ul>
            {fruits.map((fruit, ind) => {
                return <li key={ind}>{fruit}</li>
            })}
        </ul>

        <h3>Fruit Dropdown:</h3>
        <select>
            {fruits.map((fruit, ind) => {
                return <option key={ind}>{fruit}</option>
            })}
        </select>
    </>
}
