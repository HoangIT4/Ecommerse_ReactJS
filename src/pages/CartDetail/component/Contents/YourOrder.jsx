import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
import zalopaylogo from '@icons/images/ZaloPay.svg'
import { useContext } from 'react';
import {SideBarContext} from '@/context/SidebarProvider';
import LoadingCart from '@pages/CartDetail/component/LoadingCart';
import { DeleteOutlined  } from '@ant-design/icons';
import SelectBox from '@pages/CartDetail/component/SelectBox'
function YourOrder({ nextStep, formState, handleSubmit  }) {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerMethods,
        titleMethods,
        containerRight,
        boxImgMethods,
        imgMethods,
        textSecure
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://pos.hn.ss.bfcplatform.vn/inside/f590a670-abc8-45eb-b52a-8161c18a94c1',
            zalopaylogo ,
        // 'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    ];

    const Total = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    },0).toFixed(3);;

  

    return (  
            <div className={containerRight}>
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

                <Button content={'PLACE ORDER'}  onClick={handleSubmit} />
                <div className={space} />
                <Button content={'RETURN'} isPriamry={false} />

                {isLoading && <LoadingCart />}
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethods}>
                    {srcMethods.map((src, index) => {
                        return (
                            <img
                                src={src}
                                alt={src}
                                className={imgMethods}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={textSecure}>Your Payment is 100% Secure</div>
        </div>
    
    );
}

export default YourOrder;