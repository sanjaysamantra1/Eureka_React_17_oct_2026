// import axios from 'axios';
import { useEffect, useState } from 'react';
import client from '../../utils/client';

export default function ToDoTableHttp() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        // let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        let response = await client.get('todos')
        console.log(response)
        setTodos(response.data);
    }
    useEffect(() => {
        fetchTodos()
    }, []);

    return <>
        <h3>ToDo Table Http</h3>
        <table className="table table-bordered">
            <tbody>
                {todos.map((comment) => {
                    return <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.userId}</td>
                        <td>{comment.title}</td>
                        <td>{comment.completed.toString()}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
