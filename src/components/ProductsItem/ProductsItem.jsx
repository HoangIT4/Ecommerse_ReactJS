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
import { HOST_BE} from '@/config/url'
import {SideBarContext} from '@/context/SidebarProvider'
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ProductsItem({productID,src,preImg,name,formattedPrice,stock}) {
    console.log(stock);
    

    const {containerItem,boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls,ClickSpace} = styles
    const navigate = useNavigate();
    const UserID = Cookies.get('UserID')
    const [isLoading, setIsLoading] = useState(false);
    // const [selectedProduct, setSelectedProduct] = useState(null);
    const {setIsOpen, setType, handleGetListProductCart} = useContext(SideBarContext);
    const { toast } = useContext(ToastContext); 
    const [productStock, setProductStock] = useState(stock);


    const handleProductClick = (data) => {
        // setSelectedProduct(data)
        navigate(`/productdetail/${productID}`);
        
    };

    const handleAddToCart = () =>{
        if(!UserID){
            setIsOpen(true);
            setType("user");
            toast.warning('Please login to add to cart')

            return; 

          
        }
        const quantityToAdd = 1; // Đây là số lượng bạn muốn thêm vào giỏ hàng, có thể thay đổi tùy vào logic giao diện
  
        if (quantityToAdd > productStock) {
            toast.error(`You can only add up to ${productStock} items in stock.`);
            return;
          }
    
        const data ={
            userID: UserID,
            productID:productID,
            quantity: Math.min(quantityToAdd, productStock),
            productPrice:formattedPrice,
    
        }

        setIsLoading(true);
        addProductToCart(data)  
            .then((res) => {     
                
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                toast.success(res.message,{ autoClose:1000 })            
                handleGetListProductCart(UserID, 'cart');
                setProductStock(productStock - quantityToAdd);
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    



    return (
        <div className={containerItem}
           
        >
            <div className={boxImg}>
                <img src={src.startsWith("http") ? src : `${HOST_BE}${src}`} alt={name} />
                <img src={preImg.startsWith("http") ? preImg : `${HOST_BE}${preImg}`} className={showImageWhenHover}/>

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