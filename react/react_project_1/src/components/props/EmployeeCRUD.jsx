import React from 'react'
import Swal from 'sweetalert2';

import SnackbarModule from 'awesome-snackbar';
const Snackbar = SnackbarModule.default || SnackbarModule;

import EmployeeTable from './EmployeeTable'
import EmployeeAdd from './EmployeeAdd'

export default function EmployeeCRUD() {
    const employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
    ];
    const deleteEmp = (empId) => {
        // alert(`employee ${empId} deleted Successfully!!!`);
        // Swal.fire('Deleted', `employee ${empId} deleted Successfully!!!`, 'success')

        new Snackbar(`employee ${empId} deleted Successfully!!!`,
            { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
        );
    }
    return <>
        <h4 className="text-center">Employee CRUD</h4>

        <div className="row">
            <div className="col-sm-8">
                <EmployeeTable employees={employees} deleteEmp={deleteEmp} />
            </div>
            <div className="col-sm-4">
                <EmployeeAdd />
            </div>
        </div>
    </>
}
