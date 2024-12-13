import React, { createContext, useState } from 'react';

// Tạo Context
export const CheckoutContext = createContext();

// Tạo Provider
export const CheckoutProvider = ({ children }) => {
  const [formData, setCheckoutData] = useState({}); // Lưu trạng thái form data

  return (
    <CheckoutContext.Provider value={{ formData, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};
