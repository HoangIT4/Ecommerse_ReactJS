import { deleteItem } from '@/apis/cartService';
import styles from  './styles.module.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { SideBarContext } from '@/context/SidebarProvider';
import { CloseOutlined } from '@ant-design/icons';
import { HOST_BE } from "@/config/url";
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';


function SidebarProduct({
    src,
    nameProduct,
    priceProduct,
    quantity,
    cartID,
    userID
}) {
    const {content,container,title,price,boxClose,overlayLoading} = styles

    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCart } = useContext(SideBarContext);

    const handleRemoveItem = () =>{
        setIsDelete(true);
        deleteItem({
            cartID,
            userID
        })
        .then((res)=>{
            setIsDelete(false);          
            handleGetListProductCart(userID, 'cart');
            
        })
        .catch(err =>{
            setIsDelete(false);
        })
        
    }


    return ( 
        
    <div className={container}> 
        <div>
            <img src={src.startsWith("http") ? src : `${HOST_BE}${src}`}></img>
        </div>
        <div className={boxClose} style={{fontSize:'15px'}} onClick={handleRemoveItem}>
            <CloseOutlined/>
        </div>
        <div className={content}>
            <div className={title}>{nameProduct}</div>
            <div className={price}> {quantity} x {priceProduct} đ</div>
        </div>

        {isDelete && (
            <div className={overlayLoading}>
                <LoadingTextCommon />
            </div>
        )}
    </div> );
}

export default SidebarProduct;