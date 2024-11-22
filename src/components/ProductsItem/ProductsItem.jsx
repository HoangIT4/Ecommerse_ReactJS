import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import detailIcon from '@icons/svgs/detail-icon.svg';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import {ToastContext} from '@/context/ToastProvider';
import {SideBarContext} from '@/context/SidebarProvider'

function ProductsItem({id,src,preImg,name,price}) {
    const {containerItem,boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls} = styles
    const navigate = useNavigate();
    const userId = Cookies.get('userId')
    // const {setIsOpen, setType} = useContext(SidebarContext);
    const {toast} = useContext(ToastContext);


    const handleProductClick = () => {
        navigate(`/productdetail/${id}`);
        console.log(id);
        
    };

    const handleAddToCart = () =>{
        // console.log(userId);
        // if(userId){
        //     setIsOpen(true);
        //     setType("login");
        //     toast.warning('Please login to add to cart')
        //  return
        // }
    
    }
    return (
        <div className={containerItem}
           
        >
            <div className={boxImg}>
                <img src = {src}  />
                <img src = {preImg}
                className={showImageWhenHover}/>

                <div className={showFncWhenHover}>
                    <div className={Icon} oncClick={handleAddToCart}>
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
            <div  onClick={handleProductClick}>
                <div className={title} >{name}</div>
                <div className ={priceCls}>{price}</div>
            </div>
        </div>   
      );
}

export default ProductsItem;