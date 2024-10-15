import styles from  './styles.module.scss'
import { CloseOutlined } from '@ant-design/icons';

function SidebarProduct() {
    const {content,container,title,price,boxClose} = styles
    return ( 
        
    <div className={container}> 
        <div>
            <img src="https://u-shop.vn/images/thumbs/0015480_kem-u-tresemme-salon-rebond-180ml.png"></img>
        </div>
        <div className={boxClose} style={{fontSize:'15px'}}>
            <CloseOutlined/>
        </div>
        <div className={content}>
            <div className={title}>title of product</div>
            <div className={price}>Price</div>
        </div>
    </div> );
}

export default SidebarProduct;