import axiosClient from './axiosClient';

const register = async (body) =>{  // bất đồng bộ nên để là async
   try {
      return await axiosClient.post('/register', body);
  } catch (error) {
      // Ném lỗi để phần gọi hàm có thể xử lý
      throw error;
  } // tham số đầu là router muốn gọi, tham số thứ 2 là data trong method post
}

export {register}