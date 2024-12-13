import React, { useContext } from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
import { SideBarContext } from '@/context/SidebarProvider';
import { createOrder } from '@/apis/orderService';
import LoadingCart from '@pages/CartDetail/component/LoadingCart';
import zalopaylogo from '@icons/images/ZaloPay.svg';

function YourOrder({ formState, userId, handleSubmit }) {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        containerMethods,
        titleMethods,
        boxImgMethods,
        imgMethods,
        textSecure
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const Total = listProductCart.reduce((acc, item) => acc + item.total, 0).toFixed(3);

    const placeOrder = async () => {
        try {
            const orderData = {
                userId: '5f357621-a032-4a3e-bed7-8fbcea1dc409', // Include userId here
                ...formState,
                // totalPrice: Total,
                // products: listProductCart
            };
            console.log("Sending order data:", orderData);
            const response = await createOrder(orderData);
            console.log("Order placed successfully:", response);
            alert("Đặt hàng thành công!");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Đặt hàng thất bại! Vui lòng thử lại.");
        }
    };

    return (
        <div className={styles.containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>
                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>{Total}đ</div>
                </div>
                <div className={cls(boxTotal, totals)}>
                    <div>TOTAL</div>
                    <div>{Total}đ</div>
                </div>
                <Button content={"PLACE ORDER"} onClick={placeOrder} />
                {isLoading && <LoadingCart />}
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>
                <div className={boxImgMethods}>
                    <img src={zalopaylogo} alt="ZaloPay" className={imgMethods} />
                    {/* Add other payment method logos here */}
                </div>
            </div>

            <div className={textSecure}>Your Payment is 100% Secure</div>
        </div>
    );
}

export default YourOrder;