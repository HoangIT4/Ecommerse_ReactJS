import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import detailIcon from '@icons/svgs/detail-icon.svg';
function ProductsItem({id,src,preImg,name,price}) {
    const {containerItem,boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls} = styles
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate(`/productdetail/${id}`);
        console.log(id);
        
    };
    return (
        <div className={containerItem}
            onClick={handleProductClick}
        >
            <div className={boxImg}>
                <img src = {src}  />
                <img src = {preImg}
                className={showImageWhenHover}/>

                <div className={showFncWhenHover}>
                    <div className={Icon}>
                        <img src={cartIcon}/>
                    </div>
                    <div className={Icon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={Icon}>
                        <img src={wlIcon}/>
                    </div>
                    <div className={Icon}>
                        <img src={detailIcon} alt="" />
                    </div>
                </div>
                
        
            
            </div>
            <div className={title}>{name}</div>
            <div className ={priceCls}>{price}</div>
        </div>   
      );
}

export default ProductsItem;