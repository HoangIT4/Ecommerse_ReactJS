import React, { createContext, useState ,useContext} from 'react';
export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type,setType] = useState('');
  const [listProductCart,setListProductCart] =  useState([])

  // const UserID = Cookies.get('UserID')
  
  const handleGetListProductCart = (UserID,type) =>{
    if(UserID && type =='cart'){
      getCart(UserID)
      .then((res) =>{  
        setListProductCart(res.data)
      }).catch((err)=>{
        setListProductCart([])
      })
    }
  }
  
  
  const value={
    isOpen, 
    setIsOpen,
    type,
    setType, 
    listProductCart,
    handleGetListProductCart
  }
  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);