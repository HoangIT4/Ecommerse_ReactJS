import styles from './shoppage.module.scss';
import { useState,useEffect } from 'react';
import React from 'react';
import CategoriesBrands from '@components/Cate_Brand_DealHot/CategoriesBrands';
import MainLayout from '@components/Layout/Layout';
import SaleBanner from '@components/SaleBanner/SaleBanner';
import Trademark from '@components/AllBrand/Trademark/Trademark';
import Category from '@components/Category/Category';
import ListProducts from '@components/ListProducts/ListProducts';
import {getProducts} from '@/apis/productsService';
import { getBrands } from '@/apis/brandsService';
import {getCategories} from '@/apis/categoryService'
function OurShopPage() {
    const {container,saleBanner} = styles
    const [listProducts,setListProducts] = useState([]);
    const [listBrands,setListBrands] = useState([])
    const [listCategories,setListCategories] = useState([])

    

    useEffect(() => {
        getProducts().then( res =>{
            setListProducts(res.data)      
        });
        getBrands()
        .then(res => {
          setListBrands(res.data)
        });
      getCategories()
        .then(res => {
          setListCategories(res.data)
        })
    }, []);
    
    return ( 
        <div className={container}>         
            <MainLayout>   
            <CategoriesBrands brands={listBrands} categories={listCategories} />
                <div className={saleBanner}>
                    <SaleBanner/>
                </div>
                {/* <Trademark data={listBrands}/> */}
                <Category />
                <ListProducts data={listProducts}/>
            </MainLayout>
        </div>

    );
}

export default OurShopPage;