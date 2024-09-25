import ProductsItem from '../ProductsItem/ProductsItem';
import styles from './styles.module.scss'
import MainLayout from '@components/Layout/Layout';

function ListProducts() {
    const {container,containerItem,containerList} = styles
    
    return ( 
        <MainLayout>
            <div className = {container}>
                <div className={containerList}>
                    <div className={containerItem}>
                        <ProductsItem/>
                        
                    </div>
                    <div className={containerItem}>
                        <ProductsItem/>
                        
                    </div>
                    <div className={containerItem}>
                        <ProductsItem/>
                       
                    </div>
                    <div className={containerItem}>
                        <ProductsItem/>
                 
                    </div>
                    <div className={containerItem}>
                        <ProductsItem/>   
                    </div>
                </div>
                
            </div>
            
           
        </MainLayout>
     );
}

export default ListProducts;
