import React from 'react'
import { Link, Outlet, Route } from 'react-router'

export default function Careers() {
    return <>
        <h3>This is Careers Component</h3>

        <div>
            
            <Link to="permanent" className="mx-2">Permanent Jobs</Link>
            <Link to="contract">Contract Jobs</Link>
        </div>
        <Outlet />
    </>
}
