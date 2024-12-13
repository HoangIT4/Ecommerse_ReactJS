import React, { useContext, useState } from 'react';
import BillDetail from './BillDetail';
import YourOrder from './YourOrder';
import styles from '../../styles.module.scss';
import { createOrder } from '@/apis/orderService';
import { CheckoutContext } from '../../../../context/CheckoutProvider';

const CheckoutForm = () => {
  const { setCheckoutData, userId } = useContext(CheckoutContext); // Make sure userId is in context
  
  const { containerContents } = styles;
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    paymentMethod: 'cod',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await createOrder({
        userId, // Include userId here
        ...formState,
      });
      console.log('Order placed successfully:', response);
      alert("Đặt hàng thành công!");
    } catch (err) {
      setError(err.message);
      console.error('Error placing order:', err);
      alert("Đặt hàng thất bại! Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={containerContents}>
      <BillDetail
        formState={formState}
        setFormState={setFormState}
        handleSubmit={handleSubmit}
      />
      <YourOrder
        formState={formState}
        userId={userId} // Pass userId to YourOrder
      />
    </div>
  );
};

export default CheckoutForm;