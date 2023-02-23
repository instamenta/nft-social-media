import { useNavigate} from "react-router-dom"
import { Card } from "./Card/Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import "./Catalog.css"

export const Catalog = () => {

    const navigate = useNavigate()
    const [nftList, setNftList] = useState([])
    const ntfComponents = nftList.map((card) => {
        const price = card.price.toString()
        let eventHandler = () => {
            navigate(`/nft/catalog/${card._id}`)
        }
        return (
            <Card
                key={card._id}
                img={card.pic}
                title={card.name}
                description={card.info}
                price={price}
                eventHandler={eventHandler}
            />
        )
    })

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:3031/nft/catalog')
            if (res.status === 200) {
                setNftList(res.data)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="catalog-container">
            <form className='catalog-form'>

                <h1 className="message-catalog">
                    ONLY FOR THE REAL HUNTERS</h1>
                {ntfComponents
                    ? <div className="wrapper-card">
                        {ntfComponents}
                    </div>
                    : <div className="wrapper-card">
                        <h1>No available nft in your region</h1>
                    </div>}
            </form>
        </div>
    )
}