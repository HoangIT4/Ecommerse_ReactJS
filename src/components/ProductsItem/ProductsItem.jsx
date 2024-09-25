import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import detailIcon from '@icons/svgs/detail-icon.svg';
function ProductsItem({src,prevSrc,name,price}) {
    const {boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls} = styles

    return (
        <div>
            <div className={boxImg}>
            <img src="https://u-shop.vn/images/thumbs/0015582_nuoc-giat-omo-matic-cho-quan-ao-be-yeu-tui-36kg.png" alt="" />
            <img src="https://u-shop.vn/images/thumbs/0013616_nuoc-giat-omo-matic-cho-quan-ao-be-yeu-tui-36kg.png" 
            alt=""
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
            <div className={title}>Nước giặt OMO Matic cho Quần áo Bé yêu túi 3.6kg</div>
            <div className ={priceCls}>200.000 đ</div>
        </div>   
      );
}

export default ProductsItem;