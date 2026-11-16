import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function EmployeeTable({ employees, deleteEmp }) {
    return <>
        <h4 className="text-center">Employee Table</h4>

        <table className="table table-bordered">
            <tbody>
                {employees.map(emp => {
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.role}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.status}</td>
                        <td>
                            {/* <button className="btn btn-danger"
                                onClick={() => deleteEmp(emp.id)}>Delete</button> */}

                            <FaTrash color='red' onClick={() => deleteEmp(emp.id)} />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
