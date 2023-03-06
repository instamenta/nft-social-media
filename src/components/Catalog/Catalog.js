import { useNavigate } from "react-router-dom"
import { Card } from "./Card/Card"
import { useEffect, useState } from "react"

import "./Catalog.css"
import { getNfts } from "../../services/NftService"

export const Catalog = () => {
    const navigate = useNavigate()
    const [nftList, setNftList] = useState([])

    const ntfComponents = nftList.map((card) => {
        const price = card.price?.toString()
        const eventHandler = () =>
            navigate(`/nft/catalog/${card._id}`)

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
        (async function getData() {
            const data = await getNfts()
            if (data.status === 200)
                setNftList(data.data)
        })()
    }, [])

    return (
        <div className="catalog-container">
            <form className='catalog-form'>
                <h1 className="message-catalog">
                    FIND ALL NFT</h1>
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