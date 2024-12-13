import axiosClient from './axiosClient';

const getBrands = async () =>{
    const res = await axiosClient.get('/Brand');
    return res.data;
}



export {getBrands}