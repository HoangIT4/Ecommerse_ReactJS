import styles from './styles.module.scss'
import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from 'classnames';


function SaleBanner() {
    const {container,arrow,next,prev} = styles

    const arrImage = [
        "https://u-shop.vn/images/thumbs/0016743_Desktop.png",
        "https://u-shop.vn/images/thumbs/0016674_Simple_Onsite_Header_1320x440.png",
        "https://u-shop.vn/images/thumbs/0016739_Desktop.png"
    ]

    const NextArrow = ({ onClick }) => {
        return (
          <div className={classNames(arrow,next)} onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className={classNames(arrow, prev)} onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 9000,
        nextArrow: <NextArrow />,   
        prevArrow: <PrevArrow />    
      };
    return (
        <Slider  className={container} {...settings}>
                {arrImage.map((link,index) =>(
                    <div   key={index}>                  
                        <img alt='Banner' src={link} 
                          style={{
                            maxWidth:'1280px',
                            width:'100%',
                            borderRadius:'10px',
                            display:'block',
                            justifyContent:'center',
                            alignItems:'center'
                          }}/>
                    </div>
                ))}
                    
            
        </Slider>
      );
}

export default SaleBanner;