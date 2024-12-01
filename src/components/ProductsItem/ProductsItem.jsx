import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import detailIcon from '@icons/svgs/detail-icon.svg';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import {ToastContext} from '@/context/ToastProvider';

import {SideBarContext} from '@/context/SidebarProvider'
import { addProductToCart } from '@/apis/cartService';

function ProductsItem({productID,src,preImg,name,formattedPrice}) {
    const {containerItem,boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls,ClickSpace} = styles
    const navigate = useNavigate();
    const UserID = Cookies.get('UserID')
    const {setIsOpen, setType,handleGetListProductCart} = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);



    const handleProductClick = () => {
        // navigate(`/productdetail/${productID}`);
        console.log(productID);
        
    };

    const handleAddToCart = () =>{
        if(!UserID){
            setIsOpen(true);
            setType("login");
            toast.warning('Please login to add to cart')

            return; 
        }
    
        const data ={
            userID: UserID,
            productID:productID,
            quantity:1,
            // Image:src,
            // productName:name,
            productPrice:formattedPrice
    
        }
        console.log(data);


        addProductToCart(data)  
            .then((res) => {        
                setIsOpen(true);
                setType('cart');
                toast.success(res.message)
                handleGetListProductCart(UserID, 'cart');
            })
            .catch((error) => {
                // toast.error('Add Product to cart failed!');
                toast.error(error.message)
            });
    }





    return (
        <div className={containerItem}
           
        >
            <div className={boxImg}>
                <img src = {src}  />
                <img src = {preImg}
                className={showImageWhenHover}/>

                <div className={showFncWhenHover}>
                    <div className={Icon} onClick={handleAddToCart}>
                        <img src={cartIcon}/>
                    </div>
                    <div className={Icon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={Icon}>
                        <img src={wlIcon}/>
                    </div>
                    <div className={Icon}  onClick={handleProductClick}>
                        <img src={detailIcon} alt="" />
                    </div>
                </div>
                
        
            
            </div>
            <div  className={ClickSpace} onClick={handleProductClick}>
                <div className={title} >{name}</div>
                <div className ={priceCls}>{formattedPrice} đ</div>
            </div>
        </div>   
      );
}

export default ProductsItem;