import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./SelectPicture.css"
export const SelectPicture = () => {
    const params = useParams()
    const userId = params.id

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
            const { data, status } = await axios.get(`http://localhost:3031/profile/${userId}`)

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

        let eventHandler = async (e) => {
            e.preventDefault()

            const currentUser = localStorage.getItem('userData')
            try {
                if (currentUser) {
                    const config = {
                        headers: {
                            "Content-type": "application/json"
                        }
                    }
                    const data = await axios.post(`http://localhost:3031/profile/${userData._id}/select-profile-picture`,
                        { currentUser, nftUrl },
                        config
                    )
                    navigate('/profile/' + userData._id)
                }
            } catch (error) {
            }
        }

        return (
            <div className="select-profile-pic-container">
                <img onClick={eventHandler} src={nftUrl} alt="profile-picture" className="select-profile-pic-img" />
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
                            </> }
                    </div>
                    <h1 className="select-star-message-bottom">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
                </form>
            </div>
    )
}