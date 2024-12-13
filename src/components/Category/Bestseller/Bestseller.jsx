import bestseller from '@icons/images/best-seller.png'
import styles from './styles.module.scss'

function Bestseller() {
    const {container,title,divImg} = styles
    return (  
        <div className={container}>
            <div className={divImg}>
                <img src={bestseller} style={{width:'60px',height:'60px'}}></img>  
            </div>
            <div className={title}>Best Seller</div>
        </div>
    );
}

export default Bestseller;