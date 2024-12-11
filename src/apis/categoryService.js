import axiosClient from './axiosClient';

const getCategories = async () =>{
    const res = await axiosClient.get('/Category');
    return res.data;
}
const getCategoryById = async (id) => {
    const res = await axiosClient.get(`/Category/${id}`);
    console.log(res.data);
    
    return res;
}


export {getCategories, getCategoryById}