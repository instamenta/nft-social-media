import "./Register.css"

import { useState } from 'react'
import { FormInput } from "../FormInput/FormInput"

export const Register = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword:'',
    })
    const inputs = [
        {
            id: 1,
            name:"username",
            type: 'text',
            placeholder: 'Username',
            label: 'Username',
        },
        {
            id: 2,
            name:"email",
            type: 'text',
            placeholder: 'Email',
            label: 'Email',
        },
        {
            id: 3,
            name:"birthday",
            type: 'text',
            placeholder: 'Birthday',
            label: 'Birthday',
        },
        {
            id: 4,
            name:"password",
            type: 'text',
            placeholder: 'Pasword',
            label: 'Pasword',
        },
        {
            id: 5,
            name:"confirmPassowrd",
            type: 'text',
            placeholder: 'Confirm Password',
            label: 'Confirm Password',
        },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    console.log(values)
    return (
        <div className="app">
            <form onSubmit={handleSubmit} >
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]}
                    onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}