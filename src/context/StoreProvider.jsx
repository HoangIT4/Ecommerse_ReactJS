import React, { createContext, useState ,useContext, useEffect} from 'react';
import  Cookies  from 'js-cookie';
import { getInfo } from '../apis/authService';
import { useNavigate } from 'react-router-dom';
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
 

  const[userInfo,setUserInfo] = useState(null)
  const navigate = useNavigate()
  const UserID= Cookies.get('UserID');

  const handleLogOut = () =>{
    Cookies.remove('token');
    Cookies.remove('UserID');
    setUserInfo(null)
    navigate('/ourshop')
    window.location.reload()

  }
  useEffect(()=>{
    if(UserID){
     
      getInfo(UserID).then((res)=>{
        
        setUserInfo(res.data);

   
        
        
      }).catch((error) => {
        
      })
    }
  },[UserID])

  
 
  
  
  return (
    <StoreContext.Provider value={{userInfo, handleLogOut }} >
      {children}
    </StoreContext.Provider>
  );
};
