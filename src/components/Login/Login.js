import Cookies from 'js-cookie'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/UserService'
import { FormInput } from '../FormInput/FormInput'

import AuthContext from '../../context/AuthProvider'
export const Login = () => {

    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext)

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

        const loginData = await loginUser(username, password)

        if (loginData === 'Invalid username or password') {
            setErrors('Invalid username or password')
        } else {
            Cookies.set('user', loginData.token)
            setAuth(loginData)
            navigate('/')
        }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div className='main'>
            <div className='login-container'>
                <div className='login-decoration'>

                    <h1 className='auth-h1'><i class="fa-solid fa-user-lock"></i> Login</h1>

                </div>
                <form
                    onSubmit={handleSubmit}
                    className='form-container'>
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

                    <button className='submit-button'>
                        Login
                    </button>

                    <Link to="/users/register" className='auth-redirect'>
                        Redirect to register.
                    </Link>
                </form>
                <div className='login-decoration-bottom'>
                </div>
            </div>
        </div>
    )
}