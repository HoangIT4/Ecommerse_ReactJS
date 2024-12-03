import axiosClient from './axiosClient';

const getProducts = async () =>{
    const res = await axiosClient.get('/Product/All');
    return res.data;
}
const getProductById = async (productId) => {
  
  const res = await axiosClient.get(`/Product/${productId}`);
  console.log(res);
  return res.data;
  
  };

    
export { getProducts,getProductById };
