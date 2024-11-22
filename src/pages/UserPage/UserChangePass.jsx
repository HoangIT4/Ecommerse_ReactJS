import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const UserChangePass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = () => {
    // Xử lý logic xác nhận mật khẩu
    console.log('Mật khẩu mới:', password);
    console.log('Xác nhận mật khẩu:', confirmPassword);
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

        {/* Mật khẩu mới */}
        <TextField
            label="Mật khẩu mới"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            ),
            }}
        />

        {/* Xác nhận mật khẩu */}
        <TextField
            label="Xác nhận mật khẩu"
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
            disabled={!password || !confirmPassword || password !== confirmPassword}
        >
            Xác Nhận
        </Button>
        </Box>
    </div>
  );
};

export default UserChangePass;
