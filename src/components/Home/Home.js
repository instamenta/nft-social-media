import { Link } from "react-router-dom";
import { ImageSlider } from "./Deck/ImageSlider";
import { SliderData } from "./Deck/SliderData";

import "./Home.css"
export const Home = () => {
    
    return (
        <div className="home-page-container">
        <section id="welcome-world" className="main-home section">
            <div className="welcome-message">
                <div>
                    <h2>Interested in hunting down the best nft's?</h2>
                </div>

                <div>
                    <h3>you are in the right place! catch em all!</h3>
                </div>
            </div>
        </section>
        <section className="slider-section section">
            <ImageSlider slides={SliderData}/>
        </section>
        <section className="last-section section">
            <p>page 3   </p>
        </section>
        </div>
    );
}