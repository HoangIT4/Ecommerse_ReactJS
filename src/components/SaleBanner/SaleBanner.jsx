import styles from './styles.module.scss'
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function SaleBanner() {
    const {container,slickprev,slicknext} = styles

    const arrImage = [
        "https://u-shop.vn/images/thumbs/0016743_Desktop.png",
        "https://u-shop.vn/images/thumbs/0016674_Simple_Onsite_Header_1320x440.png",
        "https://u-shop.vn/images/thumbs/0016739_Desktop.png"
    ]

    
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 9000,
      };
    return (
        <Slider  {...settings}>
                {arrImage.map((link,index) =>(
                    <div className={container}  key={index}>                  
                        <img src={link} style={{width:'100%',borderRadius:'10px'}}/>
                    </div>
                ))}
                    
            
        </Slider>
      );
}

export default SaleBanner;