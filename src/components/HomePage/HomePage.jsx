import styles from './styles.module.scss'
import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import BannerBottom from '@components/BannerBottom/BannerBottom';
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import ListProducts from '@components/ListProducts/ListProducts';
import MyFooter from '@components/Footer/Footer';
import {useEffect, useState} from 'react';
import {getProducts} from '@/apis/productsService';


function HomePage() {

    const [listProducts,setListProducts] = useState([])
    useEffect(() => {
        getProducts().then( res =>{
            setListProducts(res)
        });
    }, []);


    
    return (  
        <>
                <MyHeader/>
                <Banner/>             
                <AdvanceHealing/>
                <ListProducts data={listProducts}/>
                <BannerBottom/>
                <MyFooter/>
        </>
    );
}

export default HomePage;