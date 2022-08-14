import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormInput } from "../FormInput/FormInput"

export const Upload = () => {

    const [errors, setErrors] = useState('')

    const [values, setValues] = useState({
        // username: '',
        // password: '',
        name: '',
        info: '',
        description: '',
        price: '',
        pic: '',
    })
    const inputs = [
        {
            id: 1,
            name: "name",
            type: 'text',
            placeholder: 'name',
            label: 'Name:',
            errorMessage: "Name should be 3-16 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "info",
            type: 'text',
            placeholder: 'NFT info',
            label: 'Info:',
            errorMessage: "Info should be 3-20 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,20}$",
            required: true,
        },
        {
            id: 3,
            name: "description",
            type: 'text',
            placeholder: 'NFT description',
            label: 'Description:',
        },
        {
            id: 4,
            name: "price",
            type: 'text',
            placeholder: '$$$',
            label: 'Price:',
            errorMessage: "Price should be 1-20 characters!",
            pattern: "^[0-9]{1,20}$",
            required: true,
        },
        {
            id: 5,
            name: "pic",
            type: 'text',
            placeholder: 'Upload URL to NFT',
            label: 'NFT:',
            required: true,
        },
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const { name, info, description, price, pic } = Object.fromEntries(formData.entries())
        console.log(Object.fromEntries(formData.entries()))
        // try {
        //     const config = {
        //         headers: {
        //             "Content-type": "application/json"
        //         }
        //     }
        //     const { data } = await axios.post('http://localhost:3031/users/login',
        //         {
        //             username,
        //             password
        //         },
        //         config
        //     )
        //     localStorage.setItem('userInfo', JSON.stringify(data))
        //     console.log(data)
        // } catch (error) {
        //     setErrors('Invalid username or password')
        // }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='auth-data'>
                <h1 className='auth-h1'>Upload your NFT</h1>
                <h2 className='try-again-message'>{errors}</h2>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange} />
                ))}

                <button className='submit-button'>Upload</button>
            </form>

        </div>
    )
}