import styles from './shoppage.module.scss';
import { useState,useEffect } from 'react';
import React from 'react';
import MainLayout from '@components/Layout/Layout';
import SaleBanner from '@components/SaleBanner/SaleBanner';
import Trademark from '@components/AllBrand/Trademark/Trademark';
import Category from '@components/Category/Category';
import ListProducts from '@components/ListProducts/ListProducts';
import {getProducts} from '@/apis/productsService';
import { getBrands } from '@/apis/brandsService';
function OurShopPage() {
    const {container} = styles
    const [listProducts,setListProducts] = useState([]);
    const [listBrands,setListBrands] = useState([])
    useEffect(() => {
        getProducts().then( res =>{
            setListProducts(res)
        });
        getBrands().then(res => {
            setListBrands(res)
        });
    }, []);
    return ( 
        <MainLayout>
            <div className={container}>
                <SaleBanner/>
                <Trademark data={listBrands}/>
                <Category/>
                <ListProducts data={listProducts}/>
            </div>
        </MainLayout>
        

            

      
    );
}

export default OurShopPage;