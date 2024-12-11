import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles.module.scss'
import CartSummary from './CartSumary';
import CartTable from './CartTable';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/context/SidebarProvider';
import { PiShoppingCartLight } from 'react-icons/pi';
import { addProductToCart,deleteItem , deleteCart} from '@/apis/cartService';
import CheckoutForm from './CheckOut';



function Contents({ currentStep, nextStep }) {
    const {
        containerContents,boxFooter,boxBtnDelete,boxCoupon,
        boxEmptyCart,titleEmpty,boxBtnEmpty
    } = styles
    const { 
        listProductCart,
        handleGetListProductCart,
        isLoading,
        setIsLoading,
        UserID,
    } = useContext(SideBarContext)
    const navigate = useNavigate();


    
    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        
        addProductToCart(data)
            .then((res) => {
                console.log(res);

                handleGetListProductCart(data.UserID, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        console.log(data);
        
        deleteItem(data)
            .then((res) => {
                handleGetListProductCart(data.UserID, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        console.log(UserID);
        
        setIsLoading(true);
        deleteCart({ UserID })
            .then((res) => {
                handleGetListProductCart(UserID, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigate('/ourshop');
    };
    return (  
        <div>
            {listProductCart.length > 0 && UserID ? (
                currentStep === 0 ? (
                <div className={containerContents}>
                    <div  style={{
                                width: '58%'
                            }}  >
                        <CartTable 
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />
                    <div className={boxFooter}>
                        <div className={boxCoupon}>
                            <input type='text' placeholder='Coupon code' />
                            <Button content={'OK'} isPriamry={false} />
                        </div>
                        <div className={boxBtnDelete}>
                            <Button
                                content={
                                    <div> CLEAR SHOPPING CART</div>
                                }
                                isPriamry={false}
                                onClick={handleDeleteCart}
                            />
                        </div>
                    </div>
                </div>
                <CartSummary nextStep={nextStep} />
                </div>
                ): null
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartLight
                        style={{
                            fontSize: '50px'
                        }}
                    />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
                
            )}

            {currentStep === 1 && (
                    <div>
                        {/* Form Checkout của bạn sẽ xuất hiện ở đây */}
                        <CheckoutForm />
                    </div>
                )}
    
                {/* Nút "Proceed to Checkout" */}
                
    </div>
    );
}

export default Contents;