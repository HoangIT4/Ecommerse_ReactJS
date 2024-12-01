import styles from '../../styles.module.scss';
import { DeleteOutlined  } from '@ant-design/icons';
import SelectBox from '@pages/CartDetail/component/SelectBox'
import LoadingCart from '@pages/CartDetail/component/LoadingCart';

function CartTable() {
    const {cartTable} = styles
    const cartItem = [
        {
            id:1,
            name: 'Product 1 asdasdasd ',
            price: 101.99,
            quantity: 2,
            images:'https://u-shop.vn/images/thumbs/0014023_nuoc-mam-knorr-ngon-nguyen-ban-43-do-dam-500ml_510.png'
        

        },
        {
            id:2,
            name: 'Product 2',
            price: 10.99,
            quantity: 4,
            images:'https://u-shop.vn/images/thumbs/0014023_nuoc-mam-knorr-ngon-nguyen-ban-43-do-dam-500ml_510.png'
        

        },
        {
            id:3,
            name: 'Product 3',
            price: 10.99,
            quantity: 2,
            images:'https://u-shop.vn/images/thumbs/0014023_nuoc-mam-knorr-ngon-nguyen-ban-43-do-dam-500ml_510.png'
        

        },
    ]


    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = () =>{
        console.log('log');
        
    }
    const handleDelete = (id) =>{
        console.log("delete",id);
        
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
                        {/* <th>SKU</th> */}
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItem.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.product}>
                                <img src={item.images} alt={item.name} />
                                <div>
                                    <p style={{fontSize:'16px'}}>{item.name}</p>
                                </div>
                            </td>
                            <td>
                                <DeleteOutlined style={{fontSize:'20px'}} onClick={()=>handleDelete(item.id)}/>
                            </td>
                            {/* <td>
                                <div
                                    onClick={() =>
                                        getDataDelete({
                                            userId: item.userId,
                                            productId: item.productId
                                        })
                                    }
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    &#128465;
                                </div>
                            </td> */}
                            <td>{item.price.toFixed(3)}đ</td>
                            {/* <td>{item.sku}</td> */}
                            <td>
                                {/* <SelectBox
                                    options={showOptions}
                                    getValue={(e) =>
                                        getValueSelect(
                                            item.userId,
                                            item.productId,
                                            e,
                                            item.size
                                        )
                                    }
                                    type='show'
                                    defaultValue={item.quantity}
                                /> */}
                                <SelectBox
                                    options={showOptions}
                                    getValue={getValueSelect}
                                    type='show'
                                    // defaultValue={item.quantity}
                                />
                                
                            </td>
                            <td>${(item.price * item.quantity).toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {isLoading && <LoadingCart />} */}
        </div>
     );
}

export default CartTable;