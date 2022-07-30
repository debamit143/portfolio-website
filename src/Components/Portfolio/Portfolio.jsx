import React from 'react'
import './Portfolio.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../../img/portfolio.png'
import cleanly from '../../img/cleanapp.png'
import pan3react from '../../img/pan3react.png'
import pan3 from '../../img/pan3.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

export const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood
    return (
        <div className="portfolio">
            {/* Heading */}
            <span style={{color:darkMood? 'white':''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide><img src={portfolio} alt='' /></SwiperSlide>
                <SwiperSlide><img src={cleanly} alt='' /></SwiperSlide>
                <SwiperSlide><img src={pan3react} alt='' /></SwiperSlide>
                <SwiperSlide><img src={pan3} alt='' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
