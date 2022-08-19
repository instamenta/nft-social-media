import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import "./ImageSlider.css";
import { useNavigate } from 'react-router-dom';


export const ImageSlider = ({ slides }) => {

    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (

        <section className='slider'>
            <h2 className="most-wanted-label">★ MOST WANTED NTF'S ★</h2>

            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

            {slides.map((slide, index) => {

                const handleNftRedirect = (e) => {
                    e.preventDefault()
                    navigate(`/nft/catalog/${slide._id}`)
                }

                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {
                        index === current && (
                            <img src={slide.pic} alt='travel image' className='image' onClick={handleNftRedirect}/>
                        )}

                    </div>
                )
            })}

        </section>
    )
}

