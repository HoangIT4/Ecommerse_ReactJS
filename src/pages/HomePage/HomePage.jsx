import styles from './homepage.module.scss'
import Banner from '@components/Banner/Banner'
import BannerBottom from '@components/BannerBottom/BannerBottom';
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import ListProducts from '@components/ListProducts/ListProducts';
import SaleHealing from '@components/SaleHealing/SaleHealing';
;
import {useEffect, useState} from 'react';
import {getProducts} from '@/apis/productsService';
import SaleHomePage from '../../components/SaleHomePage/SaleHomePage';


function HomePage() {
    const {container,attention} = styles
    
    const [listProducts,setListProducts] = useState([]);
    
    useEffect(() => {
     
        
        getProducts().then( res =>{
            setListProducts(res.data)
         
            
        });

    }, []);
    
    return (  
        <div className={container}>
            <Banner/>    
            <AdvanceHealing/>
            <div className = {attention}>Hãy click icon DETAIL khi đang trỏ vào sản phẩm hoặc bấm vào tên sản phẩm để xem chi tiết</div>
            <ListProducts data={listProducts}/>
            <BannerBottom/>
            <SaleHealing/>
            <SaleHomePage/>   
        </div>
    );
}

export default HomePage;