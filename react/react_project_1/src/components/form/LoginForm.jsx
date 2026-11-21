import React, { useState } from 'react'
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // avoids page refresh
        console.log("Login submitted");
    };
    return <>
        <form onSubmit={handleSubmit} className="col-sm-3 offset-3">
            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary">Login</button>
        </form>
        <pre>
            Email: {email} <br />
            Password: {password}
        </pre>
    </>
}
