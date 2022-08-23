import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Profile.css"
export const Profile = () => {
    const params = useParams()
    const userId = params.id

    // const navigate = useNavigate()

    const [errors, setErrors ] = useState('')
    const [isOwner, setIsOwner ] = useState(false)
    const [editBio, setEditBio ] = useState(false)
    const [editBtnText, setEditBtnText] = useState('Edit Bio')
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
        const userDataJSON = localStorage.getItem("userData")
        if (userDataJSON) {
            const currentUser = JSON.parse(userDataJSON)
            if (currentUser._id === userId) {
                setIsOwner(true)
            }
        }
    }, [])
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
    const handleProfileData = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        let { username, email } = Object.fromEntries(formData.entries())

        const userData = JSON.parse(localStorage.getItem('userData'))

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }

            }
            const data = await axios.post(`http://localhost:3031/profile/${userData._id}/edit`,
                { userData, username, email },
                config
            )
            console.log(data)
            console.log(data.data)
            if(data.data.message) {
                setErrors(data.data.message)
            } else {
                setErrors('Updating successful')
                    localStorage.removeItem('userData')
                    localStorage.setItem('userData', JSON.stringify(data.data))
            }
        } catch (error) {
            setErrors('Updating Failed!')
        }
    }
    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const editBioHandler = async (e) => {
        e.preventDefault()
        if(editBio === true) {
            setEditBio(false)
            setEditBtnText('Edit Bio')

        } else {
            setEditBio(true)
            setEditBtnText('Confirm')

        }
    } 

    return (
        <>
            <div className="container emp-profile">
                <form method="POST" onSubmit={handleProfileData}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <a href={userData.pic}>
                                    <img className="profile-pic" src={userData.pic} />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>NFT hunter</h5>
                                <h6>web developer</h6>
                                {editBio 
                                ? <textarea className="profile-bio mt-3 mb-5 bio-textarea" defaultValue={userData.bio}></textarea>
                                : <p className="profile-bio mt-3 mb-5 ">~ " {userData.bio.slice(0, 230)} " ~</p>}
                                <div className="info-grid">
                                    <p className="like-data">
                                        Likes given: 10
                                    </p>
                                    <p className="nft-data">
                                        Owner of 10 NFT
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <Link to="/" className="homepage-btn">✘</Link>
                            {isOwner
                                ? <><Link to={"/profile/" + userData._id + "/select-profile-picture"} className="select-pic-btn">
                                    Choose Nft
                                </Link>
                                <button className="edit-bio-btn" onClick={editBioHandler} >
                                    {editBtnText}
                                </button>
                                </>
                                : <></>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p> Social Medias: </p>
                                <Link to="" target="_Jam">YouTube</Link> <br />
                                <Link to="" target="_Jam">Instagram</Link> <br />
                                <Link to="" target="_Jam">Facebook</Link> <br />
                                <Link to="" target="_Jam">Twitter</Link> <br />
                                <Link to="" target="_Jam">Telegram</Link> <br />
                            </div>
                        </div>

                        <div className="col-md-8 pl-5 about-info ">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="grid-box">
                                        <div>
                                        </div>
                                        <div className="profile-error-container">
                                            <span className="profile-error">{errors}</span>
                                        </div>
                                        <div className="aligner label-data">
                                            <label>Username :</label>
                                        </div>

                                        <div className="aligner">
                                            {isOwner
                                                ? <>
                                                    <input onChange={onChange} type="text" className="user-data" value={userData.username} placeholder="Please fill field!" name='username'></input>
                                                    <button className="confirm-button" type="submit">✓</button>
                                                </>
                                                : <>
                                                    <input disabled className="user-data" value={userData.username} placeholder="Please fill field!"></input>
                                                </>}
                                        </div>
                                    </div>
                                    <div className="grid-box">
                                        <div className="aligner label-data">
                                            {/* <span className="profile-error">Invalid username! </span>*/}
                                            <label>E-mail :</label>
                                        </div>

                                        <div className="aligner">
                                            {isOwner
                                                ? <>
                                                    <input onChange={onChange} type="text" className="user-data" value={userData.email} placeholder="Please fill field!" name="email"></input>
                                                    <button className="confirm-button" type="submit">✓</button>
                                                </>
                                                : <>
                                                    <input disabled className="user-data" value={userData.username} placeholder="Please fill field!"></input>
                                                </>}
                                        </div>
                                    </div>

                                    <div className="grid-box" >
                                        <div className="aligner label-data">
                                            <label>Birthday :</label>
                                        </div>
                                        <div className="aligner ">
                                            <p className="user-text">{userData.birthday}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}