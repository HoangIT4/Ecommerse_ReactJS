import ProductsItem from '../ProductsItem/ProductsItem';
import styles from './styles.module.scss'
import MainLayout from '@components/Layout/Layout';

function ListProducts({data}) {
    const {container,containerItem,containerList} = styles
    return ( 
        <MainLayout>
            <div className = {container}>
                <div className={containerList}>
                        {data.map((item)=>(
                            <div key = {item.id} className={containerItem}>
                                 <ProductsItem 
                                    src = {item.src}
                                    preImg = {item.preImg}
                                    name= {item.name}
                                    price = {item.price}
                                /> 
                            </div>        
                        ))}  
                </div>
            </div>
        </MainLayout>
     );
}

export default ListProducts;
