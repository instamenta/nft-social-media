import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./Profile.css"
export const Profile = () => {
    const params = useParams()
    const userId = params.id
    console.log(params)
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
            
            console.log(`http://localhost:3031/profile/${userId}`)

            const {data, status} = await axios.get(`http://localhost:3031/profile/${userId}`)

            console.log(data)
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
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                
                                <img className="profile-pic" src={userData.pic} />

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>NFT hunter</h5>
                                <h6>web developer</h6>
                                <p className="profile-bio mt-3 mb-5 ">~ " {userData.bio.slice(0, 230)} " ~</p>



                            </div>
                        </div>
                        <div className="col-md-2">  
                            <Link to="/" className="homepage-btn">✘</Link>
                        </div>

                    </div>
                    <div className="row">
                        {/* left side url */}
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
                        {/* right side url */}
                        <div className="col-md-8 pl-5 about-info ">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className="grid-box">
                                        <div className="aligner label-data">
                                            <label>Username :</label>
                                        </div>


                                        <div className="aligner">
                                            <input className="user-data" value={userData.username} placeholder="Please fill field!"></input>
                                            <button className="confirm-button">✓</button>
                                        </div>
                                    </div>
                                    <div className="grid-box">
                                        <div className="aligner label-data">
                                            <label>E-mail :</label>
                                        </div>

                                        <div className="aligner">
                                            <input className="user-data" value={userData.email} placeholder="Please fill field!"></input>
                                            <button className="confirm-button">✓</button>
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