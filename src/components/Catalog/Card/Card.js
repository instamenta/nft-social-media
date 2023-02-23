
export const Card = (props) => {
    return (
    <div className="card" onClick={props.eventHandler}> 
        <img src={props.img} className="card-img" alt="card-img"/>
        <div className="card-body">
            <h2 className="card-title">{props?.title?.slice(0,15)}</h2>
            <p className="card-description">{props?.description?.slice(0,15)}</p>
            <h3 className="card-price">{props?.price?.slice(0,20)}</h3>
            <button className="card-btn">Details</button>
        </div>
    </div>
    )
    
}