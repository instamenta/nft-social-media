import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import { uploadNft } from '../../services/NftService'
import { Card } from '../Catalog/Card/Card'
import { FormInput } from "../FormInput/FormInput"

import "./Upload.css"

export const Upload = () => {
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext)
    
    const [errors, setErrors] = useState('')
    const [values, setValues] = useState({
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
            placeholder: 'NFT name',
            label: 'Name:',
            errorMessage: "Name should be 3-15 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9( )]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "info",
            type: 'text',
            placeholder: 'NFT info',
            label: 'Info:',
            errorMessage: "Info should be 3-15 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9( )]{3,15}$",
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
            type: 'number',
            placeholder: '$$$',
            label: 'Price:',
            errorMessage: "Price should be 1-20 characters & numbers only! ",
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
        try {
        const formData = new FormData(e.target)
        let { name, info, description, price, pic } = Object.fromEntries(formData.entries())

            const { data, status } = await uploadNft(name, info, description, price, pic, auth)

            if (status === 203) {
                setErrors('Updating Failed!')
            } else {
                navigate('/nft/catalog/' + data.post._id)
            }
        } catch (error) {
            setErrors('Updating Failed!')
        }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='nft-preview'>
                <h1 className='nft-preview-text'>preview</h1>
                <Card
                    img={values.pic}
                    title={values.name}
                    description={values.info}
                    price={values.price}
                />
            </div>

            <div>
                <form onSubmit={handleSubmit} className='form-container'>
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
        </div>
    )
}