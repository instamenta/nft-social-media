import "./Catalog.css"
import { Link } from "react-router-dom"
import { Card } from "./Card/Card"
import axios from 'axios'
import { useEffect, useState } from "react"
export const Catalog  = () => {
    
    const [nft, setNft] = useState([])
    useEffect(() => {
        
        axios.get('http://localhost:3031/nft/catalog').then(data => {
        setNft(data)})

    }, [])
    return (
        <div>
            <form className='auth-data'>
                <div className="wrapper-card">
                    
                {/* {nft ? nft.forEach(data => {
                    <Card
                    img={data.pic}
                    title={data.name}
                    description={data.label}
                    price={data.price}
                />
                })
                    : <h1>asadassda</h1>} */}
                
                
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                </div>
            </form>
            
        </div>
        
    )
}