import React from 'react';
import Swiper from 'swiper';
import {Link } from "react-router-dom";
import '../../node_modules/swiper/swiper.scss'


class Carrousel extends React.Component{
    componentDidMount(){
        this.swiper = new Swiper('.swiper-container',
        {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: false,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        })
    }
    
    render(){
        return(
            <div className="swiper-big-container">
                <div className="swiper-title">
                    <h2>{this.props.title}</h2>
                    <Link to="#"><span>VER TODOS  (100)</span></Link>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                        <div className="swiper-slide">Slide 5</div>
                        <div className="swiper-slide">Slide 6</div>
                        <div className="swiper-slide">Slide 7</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrousel;