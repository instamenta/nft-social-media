import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormInput } from "../FormInput/FormInput"
import * as api from "../../utilities/requester"

export const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const inputs = [
        {
            id: 1,
            name:"username",
            type: 'text',
            placeholder: 'username',
            label: 'Username:',
            errorMessage:"Username should be 3-16 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name:"password",
            type: 'password',
            placeholder: '********',
            label: 'Password:',
            errorMessage:"Password should be 6-20 characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))

        api.post('http://localhost:3030/', )
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='auth-data'>
                <h1 className='auth-h1'>Login</h1>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]}
                    onChange={onChange}/>
                ))}
                <Link to="/register" className='auth-redirect'>
                Redirect to register</Link>
                <button className='submit-button'>Login</button>
            </form>
            
        </div>
    )
}