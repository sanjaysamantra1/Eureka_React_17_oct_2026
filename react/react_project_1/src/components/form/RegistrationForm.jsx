import React, { useState } from 'react'

export default function RegistrationForm() {
    const initialUser = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
    }
    const initialError = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
    }
    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState(initialError);

    const changeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
        setError({
            ...error,
            [event.target.name]: event.target.value.length == 0 ? `${event.target.name} is required` : ''
        });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted', user)
    }
    const resetHandler = (event) => {
        setUser(initialUser)
    }

    return <>
        <h3>Registration Form</h3>

        <form onSubmit={submitHandler} onReset={resetHandler}>
            <p>
                FirstName:
                <input name='firstName' value={user.firstName} onChange={changeHandler} required />
                <span className="text-danger">{error.firstName}</span>
            </p>
            <p>
                Last Name:
                <input name='lastName' value={user.lastName} onChange={changeHandler} />
                <span className="text-danger">{error.lastName}</span>
            </p>
            <p>
                Email:
                <input name='email' value={user.email} onChange={changeHandler} required />
                <span className="text-danger">{error.email}</span>
            </p>
            <p>
                Gender:
                <input type="radio" name="gender" value="male" onChange={changeHandler} /> Male
                <input type="radio" name="gender" value="female" onChange={changeHandler} /> Female
            </p>

            <input type="submit" value="Submit" className='mx-2' />
            <input type="reset" value="Clear" />
        </form>
    </>
}
