import styles from '../../styles.module.scss';
import { DeleteOutlined  } from '@ant-design/icons';
import SelectBox from '@pages/CartDetail/component/SelectBox'
import LoadingCart from '@pages/CartDetail/component/LoadingCart';

function CartTable({listProductCart, getData,isLoading, getDataDelete}) {

    const {cartTable} = styles

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = (userID,productID,quantity) =>{
        const data =  
        {
            userID,
            productID,
            quantity,
            isMultiple:true
        }
        
        getData(data);
       
        
        
    }
   
    const handleQuantityChange= (id,newQuantity) =>{
        console.log("update",id,'to Quantity',newQuantity);
        
    }

    return ( 
        <div className={cartTable}>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th></th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {listProductCart.map((item) => (
                        <tr key={item.cartID}>
                            <td className={styles.product}>
                                <img src={item.preImg} alt={item.name} />
                                <div>
                                    <p style={{fontSize:'16px'}}>{item.name}</p>
                                </div>
                            </td>
                            {/* <td>
                                <DeleteOutlined style={{fontSize:'20px'}} onClick={()=>handleDelete(item.id)}/>
                            </td> */}
                            <td>
                                <DeleteOutlined 
                                    style={{fontSize:'20px', cursor: 'pointer'}} 
                                    onClick={() => getDataDelete({
                                        userID: item.userID,
                                        cartID:item.cartID
                                    })}
                                />
                            </td>
                            <td>{item.price.toFixed(3)}đ</td>
                            <td>            
                                <SelectBox
                                    options={showOptions}
                                    getValue={(e) =>
                                        getValueSelect(
                                            item.userID,
                                            item.productID,
                                            e,// là số lượng ng dùng vừa click
                                        )
                                    }
                                    type='show'
                                    defaultValue={item.quantity}
                                />
                                
                            </td>
                            <td>{(item.price * item.quantity).toFixed(3)}đ</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isLoading && <LoadingCart />}
        </div>
     );
}

export default CartTable;