import axiosClient from './axiosClient';

const getCategories = async () =>{
    const res = await axiosClient.get('/Category');
    return res.data;
}



export {getCategories}