import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { deleteNft, getNftById, likeNft, ownNft } from "../../services/NftService"
import { getUser } from "../../services/ProfileService"
import { useSelector } from "react-redux"

import "./Details.css"

export const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)

    const [creatorName, setCreatorName] = useState('')
    const [creatorId, setCreatorId] = useState('')
    const [liked, setLiked] = useState(false)
    const [owned, setOwned] = useState(false)
    const [likeState, setLikeState] = useState(0)
    const [ownState, setOwnState] = useState(0)
    const [isGuest, setIsGuest] = useState(false)
    const [isOwner, setIsOwner] = useState(false)

    const [nftData, setNftData] = useState({
        _id: '', info: '', likes: [],
        name: '', owner: '', price: '', pic: '',
    })

    useEffect(() => {
        let username
        if (user._id === '') {
            setIsGuest(true)
        } else {
            username = user?.username
            setIsGuest(false)
        }
        (async function getData() {
            const data = await getNftById(params.id)
            if (data?.message) return
            setCreatorId(data.creator)

            if (username) {
                if (data.owners?.includes(username))
                    setOwned(true)
                else
                    setOwned(false)

                if (data.likes?.includes(username))
                    setLiked(true)
                else
                    setLiked(false)
            }
            console.log(data)
            setNftData(data)
            const userObject = await getUser(data.creator)
            if (userObject?.username === username) {
                setIsOwner(true)
            }
            setCreatorName(userObject?.username)
        })()
    }, []);

    const deleteHandler = async (e) => {
        e.preventDefault()
        const data = await deleteNft(params.id)
        if (data.message) return
        navigate('/nft/catalog')
    }
    const likeHandler = async (e) => {
        e.preventDefault()
        try {
            await likeNft(nftData._id, user.username, creatorName)
            if (liked === true) {
                setLiked(false)
                setLikeState(state => state - 1)
            } else {
                setLiked(true)
                setLikeState(state => state + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const ownHandler = async (e) => {
        e.preventDefault()
        try {
            const picUrl = nftData.pic
            await ownNft(nftData._id, user.username, creatorName, picUrl)
            if (owned === true) {
                setOwnState(state => state - 1)
                setOwned(false)
            } else {
                setOwnState(state => state + 1)
                setOwned(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    {nftData._id.length > 0
                        ? <div className="details-grid">
                            <div className='details-pic-container'>
                                <img className="details-pic" src={nftData.pic} alt="details-pic" />
                            </div>
                            <div className="details-info-container">
                                <div className="details-top">
                                    <h1 className="details-name">
                                        {nftData.name}
                                    </h1>
                                    <h1 className="details-info">
                                        ( {nftData.info} )
                                    </h1>
                                </div>
                                <div>
                                    {nftData.description?.length > 0
                                        ? <h1 className="details-description">
                                            "{nftData.description?.trim()}"
                                        </h1>
                                        : null
                                    }
                                    <h1 className="details-creator">
                                        Made By:
                                        <Link to={`/profile/` + creatorId} >
                                            {creatorName}
                                        </Link>
                                    </h1>
                                    <h1 className="details-creator">
                                        Likes: {nftData.likes?.length + likeState} ♥
                                    </h1>
                                    <h1 className="details-creator">
                                        Owners: {nftData.owners?.length + ownState} #
                                    </h1>
                                </div>
                                <div className="details-action-btn">
                                    {(isGuest || isOwner) ? <></>
                                        : <>
                                            <button onClick={likeHandler} className="like-btn">
                                                {liked ? 'liked' : 'like'}
                                            </button>
                                            <button onClick={ownHandler} className="own-btn">
                                                {owned ? 'owned' : 'own'}
                                            </button>
                                        </>}
                                </div>
                                <div>
                                    <h1 className="details-price">${nftData.price}</h1>
                                </div>
                            </div>
                            <div className="details-btn-container">
                                <Link to="/nft/catalog" className="go-back-btn">
                                    ✘
                                </Link>
                                {isOwner ?
                                    <>
                                        <Link to={`/nft/catalog/${params?.id}/edit`}
                                            className="details-options-btn"
                                        >
                                            Edit
                                        </Link>
                                        <button onClick={deleteHandler} className="details-options-btn" >
                                            Delete
                                        </button>
                                    </>
                                    : null}
                            </div>
                        </div>
                        : <h1>
                            Not found
                        </h1>}
                </form>
            </div>
        </>
    )
}