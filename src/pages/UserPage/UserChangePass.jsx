import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {changePassword} from '@/apis/authService'
import { useContext } from 'react';
import Cookies from 'js-cookie';
import {ToastContext} from '@/context/ToastProvider';


const UserChangePass = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const UserID = Cookies.get('UserID')
 

  const handleClickShowPassword = (setShowFunction) => {
    setShowFunction((prev) => !prev);
  };

//   const handleClickShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

  const handleSubmit = async () => {
    if (newPassword !== confirmNewPassword) {
      toast.error('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }

    setLoading(true);
    try {
      const res = await changePassword({
        userId: UserID, 
        currentPassword: currentPassword, // Hoặc current_password
        newPassword: newPassword, 
      });
      console.log(res);
      
      toast.success(res.data.message || 'Đổi mật khẩu thành công!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      toast.error(
        error.res?.data || 'Đổi mật khẩu thất bại. Vui lòng thử lại!'
      );
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{backgroundColor:'white',padding:' 40px 0 80px'}}>
        <Box
        sx={{
            maxWidth: { xs: '100%', sm: 400 }, 
            margin: '0 auto',
            padding: { xs: 2, sm: 3 }, 
            mt: { xs: 3, sm: 5 }, 
        }}
        >
        <Typography variant="h5" gutterBottom>
            Đổi mật khẩu
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </Typography>

        <TextField
          label="Mật khẩu hiện tại"
          type={showCurrentPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          variant="outlined"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleClickShowPassword(setShowCurrentPassword)}>
                  {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Mật khẩu mới */}
        <TextField
          label="Mật khẩu mới"
          type={showNewPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleClickShowPassword(setShowNewPassword)}>
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />


        {/* Xác nhận mật khẩu */}
        <TextField
            label="Xác nhận mật khẩu"
            type={showConfirmNewPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            variant="outlined"
            value={confirmNewPassword} // Đúng tên biến state
            onChange={(e) => setConfirmNewPassword(e.target.value)} // Đúng hàm cập nhật state
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={() => handleClickShowPassword(setShowConfirmNewPassword)}>
                    {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                ),
            }}
        />

        {/* Nút Xác Nhận */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          disabled={!currentPassword || !newPassword || !confirmNewPassword || loading}
        >
          {loading ? 'Đang xử lý...' : 'Xác Nhận'}
        </Button>
        </Box>
    </div>
  );
};

export default UserChangePass;
