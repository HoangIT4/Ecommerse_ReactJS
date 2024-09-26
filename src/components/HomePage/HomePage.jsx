import styles from './styles.module.scss'
import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import BannerBottom from '@components/BannerBottom/BannerBottom';
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import ListProducts from '@components/ListProducts/ListProducts';
import Footer from '@components/Footer/Footer';
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
                <BannerBottom/>
                <AdvanceHealing/>
                <ListProducts data={listProducts}/>
                <div style={{
                    height: '300px'
                }}></div>
                <Footer/>
        </>
    );
}

export default HomePage;