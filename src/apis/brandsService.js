import axiosClient from './axiosClient';

const getBrands = async () =>{
    const res = await axiosClient.get('/brands');
    return res.data;
}

export {getBrands}