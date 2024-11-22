import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Typography, Box, Avatar, Paper } from '@mui/material';
import { Stack } from 'react-bootstrap';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    gender: 'Nam',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    phoneLinked: false,
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Xử lý lưu dữ liệu
    console.log('Form Data:', formData);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); 
    }
  };

  return (
    <Box display="flex" p={2}  sx={{ flexDirection: { xs: 'column', md: 'row' } }}> 
      <Paper sx={{ flex: 1, padding: 3, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
        <Stack gap={3} sx={{ width: { xs: '100%', md: '65%' } }}> 
          <Typography variant="h5" component="h2" gutterBottom style={{fontFamily:'"Roboto Mono", monospace'}}>
            Hồ Sơ Của Tôi
          </Typography>
          <Typography variant="body1" gutterBottom style={{fontFamily:'"Roboto Mono", monospace'}}>
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </Typography>

          <TextField
            label="User name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            style={{fontFamily:'"Roboto Mono", monospace'}}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            // disabled
            margin="normal"
            style={{fontFamily:'"Roboto Mono", monospace'}}
          />

          <TextField
            label="Phone number"
            placeholder="Thêm"
            fullWidth
            // disabled={!formData.phoneLinked}
            margin="normal"
            // helperText={!formData.phoneLinked && "Liên kết số điện thoại bạn đang sử dụng với tài khoản Shopee để có thể đăng nhập và mua hàng"}
            error={!formData.phoneLinked}
            style={{fontFamily:'"Roboto Mono", monospace'}}
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Nam" control={<Radio />} label="Nam" style={{fontFamily:'"Roboto Mono", monospace'}}/>
              <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" style={{fontFamily:'"Roboto Mono", monospace'}}/>
              <FormControlLabel value="Khác" control={<Radio />} label="Khác" style={{fontFamily:'"Roboto Mono", monospace'}}/>
            </RadioGroup>
          </FormControl>

          <TextField
            label="Ngày sinh"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mt: 2 }}
          >
            Lưu
          </Button>
        </Stack>

        {/* Phần chọn ảnh */}
        <Box sx={{ width: { xs: '100%', md: '35%' }, textAlign: 'center', mt: { xs: 2, md: 0 } }}>
          <Avatar
            sx={{ width: 100, height: 100, margin: '0 auto', marginBottom: 2 }}
            src={avatar} 
          />
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Chọn Ảnh
            <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
          </Button>
          <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1 }}>
            Dung lượng file tối đa 1 MB. Định dạng: .JPEG, .PNG
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserProfile;
