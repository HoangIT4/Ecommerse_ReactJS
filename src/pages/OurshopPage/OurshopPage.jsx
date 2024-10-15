import styles from './shoppage.module.scss';
import React from 'react';
import MainLayout from '@components/Layout/Layout';
import SaleBanner from '../../components/SaleBanner/SaleBanner';
import Trademark from '../../components/Trademark/Trademark';
import Category from '../../components/Category/Category';

function OurShopPage() {
    const {container,banner} = styles
    return ( 
        <MainLayout>
            <div className={container}>
                <SaleBanner/>
                <Trademark/>
                <Category/>
            </div>
        </MainLayout>
        

            

      
    );
}

export default OurShopPage;