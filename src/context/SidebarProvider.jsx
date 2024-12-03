import React, { createContext, useState ,useContext,useEffect} from 'react';
export const SideBarContext = createContext();
import Cookies from 'js-cookie';
import { getCart } from '../apis/cartService';

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type,setType] = useState('');
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const UserID = Cookies.get('UserID')
  
  const handleGetListProductCart = (UserID,type) =>{
    if(UserID && type ==='cart'){
      setIsLoading(true)
      getCart(UserID)
      .then((res) =>{
        
        setListProductCart(res.data)
        setIsLoading(false)
  
      }).catch((err)=>{
        setListProductCart([])
        setIsLoading(false)
      })
    }
  }

 
  
  const value={ 
    isOpen, 
    setIsOpen,
    type,
    setType, 
    UserID,
    listProductCart,
    handleGetListProductCart,
    isLoading,
    setIsLoading
  }

  useEffect(() => {
    handleGetListProductCart(UserID, 'cart');
  }, [])


  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);