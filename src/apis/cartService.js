import axiosClient from './axiosClient';

const addProductToCart = async (data) =>{
    const res = await axiosClient.post('/Cart/addToCart',data);
    return res.data;
}
const getCart = async (UserID) =>{
    const res = await axiosClient.get(`/Cart/${UserID}`);
    return res.data;

    
}
  
export { addProductToCart,getCart };
