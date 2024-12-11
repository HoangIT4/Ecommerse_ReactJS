import ProductsItem from '@components/ProductsItem/ProductsItem';
import styles from '../styles.module.scss'
// import MainLayout from '@components/Layout/Layout';



function ListProductsCate({data}) {
    const {containerCate,containerItemCate,containerListCate} = styles
    return ( 
        // <MainLayout>
            
            <div className = {containerCate}>
                <div className={containerListCate}>
                        {data.map((item)=>(
                            <div key = {item.productID} className={containerItemCate}>
                                 <ProductsItem 
                                    productID ={item.productID}
                                    src = {item.src}
                                    preImg = {item.preImg}
                                    name= {item.name}
                                    formattedPrice = {item.formattedPrice}
                                /> 
                            </div>        
                        ))}  
                </div>
            </div>
        // </MainLayout>
     );
}

export default ListProductsCate;
