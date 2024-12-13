import ProductsItem from '../ProductsItem/ProductsItem';
import styles from './styles.module.scss'
import MainLayout from '@components/Layout/Layout';



function ListProducts({data}) {
    console.log(data);
    
    const {container,containerItem,containerList} = styles

    const availableProducts = data.filter(item => item.stock > 0);
    return ( 
        <MainLayout>
        <div className={container}>
            <div className={containerList}>
                {availableProducts.length > 0 ? (
                    availableProducts.map((item) => (
                        <div key={item.productID} className={containerItem}>
                            <ProductsItem
                                productID={item.productID}
                                src={item.src}
                                preImg={item.preImg}
                                name={item.name}
                                formattedPrice={item.formattedPrice}
                                stock={item.stock}
                            />
                        </div>
                    ))
                ) : (
                    <div>No products available</div> // Hiển thị thông báo nếu không có sản phẩm
                )}
            </div>
        </div>
    </MainLayout>
     );
}

export default ListProducts;
