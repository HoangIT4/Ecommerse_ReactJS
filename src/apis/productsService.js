import axiosClient from './axiosClient';

const getProducts = async () =>{
    const res = await axiosClient.get('/products');
    return res.data;
}
// const getProductById = async (id) => {
//     const res = await axiosClient.get(`/products/${id}`);
//     return res.data;
//   };
  
export { getProducts};
