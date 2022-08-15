import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import "./Details.css"
export const Details = () => {
    const params = useParams()
    const [nftData, setNftData] = useState({
        _id: '',
        info: '',
        likes: [],
        name: '',
        owner: '',
        pic: '',
        price: '',
        ready: false,
    })
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`http://localhost:3031/nft/catalog/${params.id}`)
            console.log(data)
            setNftData({
                _id: data._id,
                info: data.info,
                likes: data.likes,
                name: data.name,
                owners: data.owners,
                pic: data.pic,
                price: data.price,
                ready: true,
                creator: data.creator,
                description: data.description,
            })
        }
        getData()
    }, []);

    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    {nftData.ready === true
                        ? <div className="details-grid">
                            <div className='details-pic-container'>
                                <img className="details-pic" src={nftData.pic} />

                            </div>
                            <div className="details-info-container">
                                <h1 className="details-name">{nftData.name}</h1>
                                <h1 className="details-info">( {nftData.info} )</h1>

                                {nftData.description.length > 0
                                ? <h1 className="details-description">"{nftData.description}"</h1>
                                : <></>
                                }
                                

                                <h1 className="details-creator">Made By: {nftData.creator}</h1>
                                <h1 className="details-price">${nftData.price}</h1>
                            </div>
                        </div>

                        : <h1>Not found</h1>
                    }
                </form>

            </div>
        </>
    )
}