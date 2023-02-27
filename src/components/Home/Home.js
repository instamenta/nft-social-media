import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { getMostWantedCount } from "../../services/NftService";
import { ImageSlider } from "./Deck/ImageSlider";
import "./Home.css";

export const Home = () => {

    const { auth, setAuth } = useContext(AuthContext)

    const [logInfo, setLogInfo] = useState(false)
    const [nftList, setNftList] = useState([])
    useEffect(() => {
        if (auth?.username) {
            setLogInfo(true)
        } else {
            setLogInfo(false)
        }
    }, [auth, setAuth])
    useEffect(() => {
        async function getLatest() {
            const nftData = await getMostWantedCount(6)
            if (nftData) {
                setNftList(nftData)
            }
        }
        getLatest()
    }, [])
    return (
        <div>
            <form className="home-form">
                <div className="welcome-message">
                    <h1 className="left-message">
                        LOOKING<br />FOR<br />THE<br />MOST<br />WANTED<br />NFT?
                    </h1>
                    <h2 className="right-message">
                        SEARCH<br />NO<br />MORE<br />YOU<br />ARE<br />ON<br />THE<br />RIGHT<br />PLACE!
                    </h2>
                </div>
                {nftList.length > 0
                    ?
                    <>
                        <ImageSlider slides={nftList}></ImageSlider>
                    </>
                    : <>
                        <h1 className="site-welcome">No NFT available</h1>
                    </>}
                <ul className="homepage-nav-list">★
                    <li>
                        <Link to="/nft/catalog" className="homepage-nav-link">
                            Catalog
                        </Link>
                    </li>★
                    <li>
                        <Link to="/nft/catalog/most-wanted" className="homepage-nav-link">
                            Most Wanted
                        </Link>
                    </li>★
                    {logInfo ? <></>
                        : <>
                            <li>
                                <Link to="/users/login" className="homepage-nav-link">
                                    Login
                                </Link>
                            </li>★
                            <li>
                                <Link to="/users/register" className="homepage-nav-link">
                                    Register
                                </Link>
                            </li>★
                        </>
                    }
                </ul>
            </form>
        </div>
    )
}