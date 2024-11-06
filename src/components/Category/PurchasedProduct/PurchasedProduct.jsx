import PurchasedProduct from '@icons/images/PurchasedProduct.png'
import styles from './styles.module.scss'
function PurchasedPro() {
    const {container,title,divImg} = styles
    return (  
        <div className={container}>
            <div className={divImg}>
            <img src={PurchasedProduct} style={{width:'60px',height:'60px'}}></img>
            </div>
            
            <div className={title}>Purchased Products</div>
        </div>
    );
}

export default PurchasedPro;