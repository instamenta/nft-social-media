import "./Catalog.css"
import { Link } from "react-router-dom"
import { Card } from "./Card/Card"
export const Catalog  = () => {
    
    return (
        <div>
            <form className='auth-data'>
                
                
                <div className="wrapper-card">
                <Card
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuBc8MP20zTWRB1l1SD7ZvNJOsmr7sLHWgw&usqp=CAU"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="data:image/jpeg;base64,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"
                    title="Best nft"
                    description="For all nft entusiastss"
                    price="45.00"
                />
                <Card
                    img="https://www.cnet.com/a/img/resize/5a9287797e44d98efa098c9c22ad9857a7cfb9e4/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
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