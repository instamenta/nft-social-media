import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editNft, getNftById } from '../../services/NftService'
import { Card } from '../Catalog/Card/Card'
import { FormInput } from "../FormInput/FormInput"
import { useSelector } from "react-redux"

export const Edit = () => {
    const params = useParams()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)

    const [errors, setErrors] = useState('')
    const [values, setValues] = useState({
        name: '',
        info: '',
        description: '',
        price: '',
        pic: '',
    })
    useEffect(() => {
        const getData = async () => {
            const data = await getNftById(params.id)
            if (data.messages) {
                return
            }
            setValues({
                info: data.info,
                name: data.name,
                pic: data.pic,
                price: data.price.toString(),
                description: data.description,
            })
        }
        getData()
    }, []);
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

        const formData = new FormData(e.target)
        const { name, info, description, price, pic } = Object.fromEntries(formData.entries())

        try {
            const status = await editNft(params.id, name, info, description, price, pic, user)
            if (status === 200) 
                navigate(`/nft/catalog/${params.id}`)
             else 
                setErrors('Updating Failed')
        } catch (error) {
            setErrors('Updating Failed!')
        }
    }
    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <div className='nft-preview'>
                <h1 className='nft-preview-text'>
                    Preview
                </h1>
                <Card
                    img={values.pic}
                    title={values.name}
                    description={values.info}
                    price={values.price}
                />
            </div>
            <div>
                <form onSubmit={handleSubmit} className='form-container'>
                    <h1 className='auth-h1'>Edit your NFT</h1>
                    <h2 className='try-again-message'>{errors}</h2>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange} />
                    ))}
                    <button className='submit-button'>
                        Upload
                    </button>
                </form>
            </div>
        </div>
    )
}