import React, { useState } from 'react';
import BillDetail from './BillDetail';
import YourOrder from './YourOrder';
import styles from '../../styles.module.scss';
import { createOrder } from '@/apis/orderService';

const CheckoutForm = () => {

  const {containerContents} = styles
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    paymentMethod: 'COD',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await createOrder(formState);
      console.log('Đặt hàng thành công:', response);
      // Thực hiện các xử lý khác sau khi đặt hàng thành công
    } catch (err) {
      setError(err.message);
      console.error('Lỗi khi đặt hàng:', err);
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
      <YourOrder formState={formState} handleSubmit={handleSubmit} isLoading={isLoading} error={error} />
    </div>
  );
};

export default CheckoutForm;
