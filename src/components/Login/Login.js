import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormInput } from "../FormInput/FormInput"

export const Login = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState('')

    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const inputs = [
        {
            id: 1,
            name: "username",
            type: 'text',
            placeholder: 'username',
            label: 'Username:',
            errorMessage: "Username should be 3-16 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: 'password',
            placeholder: '********',
            label: 'Password:',
            errorMessage: "Password should be 6-20 characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const { username, password } = Object.fromEntries(formData.entries())

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const data = await axios.post('http://localhost:3031/users/login',
                {
                    username,
                    password
                },
                config
            )
            if(data.status === 203) {
                setErrors('Invalid username or password')   
            } else {
                if (data) {
                    localStorage.setItem('userData', JSON.stringify(data.data))
                    document.cookie = `USER_DATA=${data.data.token}`
                    navigate('/')
                }
                
            }
            console.log(data.data)
        } catch (error) {
            setErrors('Invalid username or password')
        }
        
        
        
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='auth-data'>
                <h1 className='auth-h1'>Login</h1>
                <h2 className='try-again-message'>{errors}</h2>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange} />
                ))}
                <Link to="/users/register" className='auth-redirect'>
                    Redirect to register</Link>
                <button className='submit-button'>Login</button>
            </form>

        </div>
    )
}