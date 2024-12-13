import ViewedProduct from '@icons/images/viewed-products.png'
import styles from './styles.module.scss'
function ViewedPD() {
    const {container,title,divImg} = styles
    return (  
        <div className={container}> 
            <div className={divImg}>
                <img src={ViewedProduct} style={{width:'60px',height:'60px'}}></img>
            </div>
            <div className={title}>Viewed Products</div>
        </div>
    );
}

export default ViewedPD;