import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import detailIcon from '@icons/svgs/detail-icon.svg';
function ProductsItem({src,preImg,name,price}) {
    const {boxImg,showImageWhenHover,showFncWhenHover,Icon,title,priceCls} = styles
    // "https://u-shop.vn/images/thumbs/0015582_nuoc-giat-omo-matic-cho-quan-ao-be-yeu-tui-36kg.png"
    return (
        <div>
            <div className={boxImg}>
                <img src = {src} alt="" />
                <img src = {preImg}
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
            <div className={title}>{name}</div>
            <div className ={priceCls}>{price}</div>
        </div>   
      );
}

export default ProductsItem;