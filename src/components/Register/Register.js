import "./Register.css"

import { useState } from 'react'
import { FormInput } from "../FormInput/FormInput"

export const Register = () => {

    const [username, setUsername] = useState('')
    console.log(username)
    
    return (
        <div className="app">
            <form className="register-form">
                <FormInput/>
                <FormInput/>
                <FormInput/>
                <FormInput/>
            </form>
        </div>
    )
}