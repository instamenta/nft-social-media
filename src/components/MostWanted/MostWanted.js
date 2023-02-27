import { useNavigate} from "react-router-dom";
import { Card } from "../Catalog/Card/Card";
import { useEffect, useState } from "react";
import { getMostWanted } from "../../services/NftService";

export const MostWanted = () => {

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
            const data = await getMostWanted()
                if (data?.message) {
                    console.log('No Data')
                } else {
                    setNftList(data)
                }
        }
        fetchData();
    }, [])

    return (
        <div>
            <form className='form-container'>

                <h1 className="message-catalog">MOST-WANTED NFT</h1>

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