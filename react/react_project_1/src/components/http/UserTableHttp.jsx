import { useEffect, useState } from 'react'

export default function UserTableHttp() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const finalResponse = await response.json();
        setUsers(finalResponse);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return <>
        <h3>Fetch User Data From API & display in a table</h3>
        <table className="table table-bordered">
            <tbody>
                {users.map((user) => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.city}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
