import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/UserService'
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

        const data = await loginUser(username, password)
        if (data === 'Invalid username or password') {
            setErrors('Invalid username or password')
        } else {
            Cookies.set('user',data.token)
            navigate('/')
        }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='form-container'>
                <h1 className='auth-h1'>Login</h1>
                <h2 className='try-again-message'>
                    {errors}
                </h2>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />))}
                <Link to="/users/register" className='auth-redirect'>
                    Redirect to register
                </Link>
                <button className='submit-button'>
                    Login
                </button>
            </form>
        </div>
    )
}