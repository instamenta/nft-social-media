import { useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthProvider"
import { deleteNft, getNftById, likeNft, ownNft } from "../../services/NftService"
import { getUser } from "../../services/ProfileService"
import "./Details.css"

export const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { auth, } = useContext(AuthContext)

    const [editUrl, setEditUrl] = useState('/')
    const [creatorName, setCreatorName] = useState('')
    const [creatorId, setCreatorId] = useState('')
    const [liked, setLiked] = useState(false)
    const [owned, setOwned] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const [likeState, setLikeState] = useState(0)
    const [ownState, setOwnState] = useState(0)
    const [isGuest, setIsGuest] = useState(false)
    const [nftData, setNftData] = useState({
        _id: '',
        info: '',
        likes: [],
        name: '',
        owner: '',
        pic: '',
        price: '',
        ready: false,
        currentUser: '',
    })

    useEffect(() => {
        let username
        if (!auth) {
            setIsGuest(true)
        } else {
            username = auth?.username
            setIsGuest(false)
        }
        const getData = async () => {
            const data = await getNftById(params.id)
            if (data?.message) {
                return
            }
            setEditUrl(`/nft/catalog/${params.id}/edit`)
            setCreatorId(data.creator)
            if (username) {
                if (data.owners.includes(username)) {
                    setOwned(true)
                } else {
                    setOwned(false)
                }
                if (data.likes.includes(username)) {
                    setLiked(true)
                } else {
                    setLiked(false)
                }
            }
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
                currentUser: username,
            })            
            const userObject = await getUser(data.creator)
            if (userObject?.username === username) {
                setIsOwner(true)
            }
            setCreatorName(userObject?.username)
        }
        getData()
    }, []);

    const deleteHandler = async (e) => {
        e.preventDefault()
        const data = await deleteNft(params.id)
        if (data.message) {
            return
        }
        navigate('/nft/catalog')
    }
    const likeHandler = async (e) => {
        e.preventDefault()
        try {
            await likeNft(nftData._id, auth.username, creatorName)
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
            await ownNft(nftData._id, auth.username, creatorName, picUrl)
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
                    {nftData.ready === true
                        ? <div className="details-grid">
                            <div className='details-pic-container'>
                                <a href={nftData.pic}>
                                    <img className="details-pic" src={nftData.pic} alt="details-pic" />
                                </a>
                            </div>
                            <div className="details-info-container">
                                <div className="details-top">
                                    <h1 className="details-name">{nftData.name}</h1>
                                    <h1 className="details-info">( {nftData.info} )</h1>
                                </div>
                                <div>
                                    {nftData.description.length > 0
                                        ? <h1 className="details-description">"{nftData.description.trim()}"</h1>
                                        : <></>
                                    }
                                    <h1 className="details-creator">Made By: <Link to={`/profile/` + creatorId} >{creatorName}</Link></h1>
                                    <h1 className="details-creator">Likes: {nftData.likes.length + likeState} ♥</h1>
                                    <h1 className="details-creator">Owners: {nftData.owners.length + ownState} #</h1>
                                </div>
                                <div className="details-action-btn">
                                    {(isGuest || isOwner) ? <></>
                                        : <>
                                            <button onClick={likeHandler} className="like-btn">
                                                {liked
                                                    ? 'liked'
                                                    : 'like'}
                                            </button>
                                            <button onClick={ownHandler} className="own-btn">
                                                {owned
                                                    ? 'owned'
                                                    : 'own'}
                                            </button>
                                        </>}
                                </div>
                                <div>
                                    <h1 className="details-price">${nftData.price}</h1>
                                </div>
                            </div>
                            <div className="details-btn-container">
                                <Link to="/nft/catalog" className="go-back-btn">✘</Link>
                                {isOwner ?
                                    <>
                                        <Link to={editUrl} className="details-options-btn">Edit</Link>
                                        <button onClick={deleteHandler} className="details-options-btn">Delete</button>
                                    </>
                                    : <></>}
                            </div>
                        </div>
                        : <h1>Not found</h1>}
                </form>
            </div>
        </>
    )
}