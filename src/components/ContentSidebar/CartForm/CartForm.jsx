import cartIcon from '@icons/svgs/cart-icon.svg';
import styles from './styles.module.scss'
import ButtonStyle from '@components/Button/Button';
import SidebarProduct from '@components/SidebarProduct/SidebarProduct';
import { Flex,Button } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { SideBarContext } from '@/context/SidebarProvider';

function CartForm() {
    const {
        container,
        CartIcon,
        title,
        price,
        boxContent,
        subtotal, 
        containerListItem,
        boxEmpty,
        boxBtnEmpty,
    } = styles
    const { listProductCart, isLoading, setIsOpen } =useContext(SideBarContext);
    const navigate = useNavigate()

    const handleNavigateToShop = () => {
        navigate('/ourshop');
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    },0).toFixed(3);;
   
    

    const handleNavigateToCart = () => {
        navigate('/cartdetail');
        setIsOpen(false);
    };
 
    return ( 
        <div className={container}>
            <div className={boxContent}>
                <div className={CartIcon}>
                    <img width={36} height={36} src={cartIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="cartIcon"  />
                    <p className={title}>CART</p>
                </div>
               
            </div>

            { listProductCart.length ? (
                    <div className={containerListItem}>
                        <div>
                            {isLoading ? (
                                <LoadingTextCommon />
                            ) : (
                                listProductCart.map((item,cartID) =>{ 
                                    console.log(listProductCart);
                                    
                                    return (
                                        <SidebarProduct 
                                            key={cartID}
                                            src={item.preImg}
                                            nameProduct={item.name}
                                            quantity={item.quantity}
                                            priceProduct={item.formattedPrice}       
                                            cartID ={item.cartID} 
                                            userID = {item.userID}         
                                        />
                                    );
                                })
                            )}
                        </div>   
                    
                        <Flex
                            vertical
                            gap="10px"
                            style={{
                                width: '100%',
                                display:'flex',
                                justifyContent: 'center', 
                                alignItems: 'center',    
                                maxWidth: '600px',
                                backgroundPosition: 'center',
                                marginBottom:'20px'
                            }}
                        >
                                <div className={subtotal}>
                                    <div>SUBTOTAL:</div>
                                    <div className={price}>{subTotal} đ</div>
                                </div>
                            <Button type="primary" 
                                block 
                                style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}
                                onClick={handleNavigateToCart}
                            >
                                View Cart
                            </Button>
                            <Button
                                block 
                                style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}
                                onClick={handleNavigateToShop}
                            >
                                Continue shopping
                            </Button>
                        </Flex>
                    </div> 
                ):( 
                    <div className={boxEmpty}>
                        <div>No products in the cart.</div>
                        <div className={boxBtnEmpty}>
                            <ButtonStyle
                                content={'RETURN TO SHOP'}
                                onClick={handleNavigateToShop}
                            />
                        </div>
                    </div>
            
                )}
        </div>
          
            
  
    );
}

export default CartForm;