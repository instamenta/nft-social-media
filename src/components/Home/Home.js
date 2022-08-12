import { Link } from "react-router-dom";
import { ImageSlider } from "./Deck/ImageSlider";
import { SliderData } from "./Deck/SliderData";

import "./Home.css"
export const Home = () => {
    
    return (
        <div>
            <form className="home-form">
                <h1 className="star-message">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
                <div className="welcome-message">
                    <h1 className="left-message">
                        LOOKING<br/>FOR<br/>THE<br/>MOST<br/>WANTED<br/>NFT?
                    </h1>
                    <h2 className="right-message">
                        SEARCH<br/>NO<br/>MORE<br/>YOU<br/>ARE<br/>ON<br/>THE<br/>RIGHT<br/>PLACE!
                    </h2>
                </div>
                            
                <ImageSlider slides={SliderData}></ImageSlider>
                <ul className="homepage-nav-list">
                    <li><Link to="/catalog" className="homepage-nav-link">CATALOG</Link></li>
                    <li><Link to="/catalog/most-wanted" className="homepage-nav-link">MOST WANTED</Link></li>
                </ul>
                <h1 className="star-message">★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★</h1>
            </form>
        </div>
    );
}