import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./Deck/ImageSlider";

import "./Home.css";
export const Home = () => {

    const [logInfo , setLogInfo ] = useState('false')
    const [nftList , setNftList ] = useState([])
    useEffect(() => {
        async function getLatest () {
            const userInfo = localStorage.getItem('userData')
            if(userInfo) {
                setLogInfo(true)
            }
            const nftList = await axios.get('http://localhost:3031/nft/catalog/most-wanted/5')
            if(nftList.data) {
                setNftList(nftList.data)
            }
        }
        getLatest()

    },[])
    
    return (
        <div>
            <form className="home-form">
                <h1 className="star-message">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
                <h1 className="site-welcome">The Bigger Picture</h1>
                <h1 className="star-message bottom">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
                <div className="welcome-message">
                    <h1 className="left-message">
                        LOOKING<br/>FOR<br/>THE<br/>MOST<br/>WANTED<br/>NFT?
                    </h1>
                    <h2 className="right-message">
                        SEARCH<br/>NO<br/>MORE<br/>YOU<br/>ARE<br/>ON<br/>THE<br/>RIGHT<br/>PLACE!
                    </h2>
                </div>
                            {nftList.length > 0
                            ? <>
                                <ImageSlider slides={nftList}></ImageSlider>
                            </> 
                            : <>
                            
                            </>}
                
                <ul className="homepage-nav-list">★
                    <li><Link to="/catalog" className="homepage-nav-link">Catalog</Link></li>★
                    <li><Link to="/catalog/most-wanted" className="homepage-nav-link">Most Wanted</Link></li>★
                    {logInfo 
                    ? <>
                    <li><Link to="/user/:userId" className="homepage-nav-link">Collection</Link></li>★
                    <li><Link to="/profile/:userId" className="homepage-nav-link">Profile</Link></li>★
                    </>
                    : <>
                    <li><Link to="/login" className="homepage-nav-link">Login</Link></li>★
                    <li><Link to="/register" className="homepage-nav-link">Register</Link></li>★
                    </>}
                </ul>
                <h1 className="star-message">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
            </form>
        </div>
    );
}