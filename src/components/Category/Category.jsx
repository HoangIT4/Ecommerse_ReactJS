import styles from './styles.module.scss';
import { dataMenu } from "./constants";
import Menu from './Menu/Menu';
import Hotdeal from './Hotdeal/Hotdeal';
import Bestseller from './Bestseller/Bestseller';
import PurchasedPro from './PurchasedProduct/PurchasedProduct';
import ViewedPD from './ViewedProducts/ViewedProducts';

function Category() {
    const {container,verticallLine} = styles
    return ( 
        <div className={container}>     
                <Hotdeal/>
                <div className={verticallLine}/>
                <Bestseller/>   
                <div className={verticallLine}/>  
                <PurchasedPro/> 
                <div className={verticallLine}/>
                <ViewedPD/> 
                
        </div>

     );
}

export default Category;