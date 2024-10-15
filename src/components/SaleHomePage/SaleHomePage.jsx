import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useState } from 'react';

function SaleHomePage() {
    const {container,slides} = styles
 
    const images =[
        "https://u-shop.vn/images/uploaded/KM15.png",
        "https://u-shop.vn/images/uploaded/KM14.png"
    ]
    


    return ( 
        <MainLayout>
            <div className={container}>
                <div className={slides}>
                    {images.map((src,index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} />
                    ))}
                </div>
                
            </div>
        </MainLayout>
    );
}

export default SaleHomePage;