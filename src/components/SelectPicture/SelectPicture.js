import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import AuthContext from "../../context/AuthProvider"
import { editUserPicture, getUser } from "../../services/ProfileService"
import "./SelectPicture.css"
export const SelectPicture = () => {
    const params = useParams()
    const userId = params.id
    const { auth } = useContext(AuthContext)

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        birthday: '',
        email: '',
        ownedNft: [],
        pic: 'https://preview.redd.it/xayxvj1j4in71.jpg?width=640&crop=smart&auto=webp&s=38949b716e2e55c93fdd0c2ea636e0e70b92d356',
        username: '',
        _id: '',
        bio: ''
    })
    useEffect(() => {
        const getData = async () => {
            const data = await getUser(userId)

            setUserData({
                birthday: data.birthday,
                email: data.email,
                ownedNft: data.ownedNft,
                pic: data.pic,
                username: data.username,
                _id: data._id,
                bio: data.bio
            })
        }
        getData()
    }, []);

    const ntfComponents = userData.ownedNft.map((nftUrl) => {

        const eventHandler = async (e) => {
            e.preventDefault()

            try {
                if (auth) {
                    const data = await editUserPicture(userData._id, auth, nftUrl)
                    console.log(data)
                    if (data.message) {
                        console.log('error')
                    } else {
                        navigate('/profile/' + userData._id)
                    }
                }
            } catch (error) {
                console.log('error')
            }
        }

        return (
            <div key={nftUrl} className="select-profile-pic-container">
                <img
                    onClick={eventHandler}
                    src={nftUrl}
                    alt="profilepic"
                    className="select-profile-pic-img"
                    />
            </div>
        )
    })

    return (
        <div className="container emp-profile">
            <form method="">
                <h1 className="select-star-message">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
                <h1 className="select-photo-message">Select Profile Picture</h1>
                <div className="select-pic-grid">
                    {ntfComponents
                        ? <>
                            {ntfComponents}
                        </>
                        : <>
                            <h1>No nfts</h1>
                        </>}
                </div>
                <h1 className="select-star-message-bottom">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
            </form>
        </div>
    )
}