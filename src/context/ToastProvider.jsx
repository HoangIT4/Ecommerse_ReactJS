import React, { createContext, useState ,useContext} from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
 

  const value={toast}
  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer/>
    </ToastContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);