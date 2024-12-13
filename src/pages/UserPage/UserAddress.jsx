import React from 'react';
import { Button, Typography, Box, Grid, Paper, Divider, Stack } from '@mui/material';

const UserAdress = () => {
  const addressList = [
    {
      name: 'Phạm Minh Hoàng',
      phone: '(+84) 912 211 755',
      address: 'Số 75, Đức Giang, Long Biên, Hà Nội',
      district: 'Phường Đức Giang, Quận Long Biên, Hà Nội',
      isDefault: true,
      addressType: ['Địa chỉ lấy hàng', 'Địa chỉ trả hàng'],
    },
    // Có thể thêm nhiều địa chỉ khác nếu cần
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }} > 

      {/* Header */}
      <Typography variant="h5" gutterBottom style={{fontFamily:'"Roboto Mono", monospace'}} >
        Địa chỉ của tôi
      </Typography>

      {/* Nút Thêm Địa Chỉ Mới */}
      <Box sx={{ textAlign: { xs: 'center', md: 'right' }, marginBottom: 2 }}> 
        <Button variant="contained" color="primary" size="large" style={{fontFamily:'"Roboto Mono", monospace'}}>
          + Thêm địa chỉ mới
        </Button>
      </Box>

      {/* Danh sách địa chỉ */}
      <Grid container spacing={2}>
        {addressList.map((address, index) => (
          <Grid item xs={12} key={index}>
            <Paper sx={{ padding: 3 }} >
              <Typography variant="h6" style={{fontFamily:'"Roboto Mono", monospace'}} >{address.name}</Typography >
              <Typography variant="body1" color="textSecondary" style={{fontFamily:'"Roboto Mono", monospace'}}>
                {address.phone}
              </Typography>
              <Typography variant="body1" style={{fontFamily:'"Roboto Mono", monospace'}}>{address.address}</Typography>
              <Typography variant="body2" color="textSecondary" style={{fontFamily:'"Roboto Mono", monospace'}}>
                {address.district}
              </Typography>

              {/* Các nút trạng thái */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ marginTop: 1 }}> 
                {address.isDefault && (
                  <Button variant="outlined" color="error" size="small" style={{fontFamily:'"Roboto Mono", monospace'}}>
                    Mặc định
                  </Button>
                )}
                {address.addressType.map((type, idx) => (
                  <Button variant="outlined" size="small" key={idx} style={{fontFamily:'"Roboto Mono", monospace'}}>
                    {type}
                  </Button>
                ))}
              </Stack>

              <Divider sx={{ marginY: 2 }} />

              {/* Các nút Hành Động */}
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}> 

                <Box>
                  <Button color="primary" sx={{ marginRight: 1 }} style={{fontFamily:'"Roboto Mono", monospace'}}>
                    Cập nhật
                  </Button>
                  <Button color="secondary" style={{fontFamily:'"Roboto Mono", monospace'}}>Xóa</Button>
                </Box>
                <Button variant="outlined"  style={{fontFamily:'"Roboto Mono", monospace'}}>Thiết lập mặc định</Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserAdress;
