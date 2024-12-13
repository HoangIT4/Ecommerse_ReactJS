import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid, Avatar, Divider, Stack } from '@mui/material';

const orders = [
  {
    shopName: "TORANO Official Store",
    productName: "Áo khoác nam bomber trần bông cao cấp siêu cán gió Torano siêu ấm DWCF002",
    productImage: "https://example.com/product1.png",
    classification: "Phân loại hàng: Đen, M",
    quantity: 1,
    priceOld: 999000,
    priceNew: 850000,
    orderStatus: "Hoàn thành",
    deliveryStatus: "Đơn hàng đã giao thành công",
    refundTime: "7 ngày trả hàng",
    total: 841500,
  },
  {
    shopName: "GUF - Thời trang Unisex",
    productName: "Áo Hoodie Nỉ Lông 485 GSM Cực Ấm Áp và Siêu Dày Dặn Màu Đen GUF",
    productImage: "https://example.com/product2.png",
    classification: "Phân loại hàng: Size L (<1m85, 85kg)",
    quantity: 1,
    priceOld: 630000,
    priceNew: 550000,
    orderStatus: "Hoàn thành",
    deliveryStatus: "Giao hàng thành công",
    total: 441500,
  },
  {
    shopName: "Gloria Beauty HN",
    productName: "Sữa chống nắng hàng ngày dưỡng trắng cho da dầu Sunplay Skin Aqua Clear White SPF50 25g",
    productImage: "https://example.com/product3.png",
    classification: "Phân loại hàng: 25g",
    quantity: 1,
    priceOld: 135000,
    priceNew: 115000,
    orderStatus: "Hoàn thành",
    deliveryStatus: "Giao hàng thành công",
    refundTime: "7 ngày trả hàng",
    total: 115000,
  },
];

const UserPurchase = () => {
  const [selectedTab, setSelectedTab] = useState("Tất cả");

  const tabs = [
    "Tất cả",
    "Chờ thanh toán",
    "Vận chuyển",
    "Chờ giao hàng",
    "Hoàn thành",
    "Đã hủy",
    "Trả hàng/Hoàn tiền"
  ];

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}> 
      {/* Header */}
      <Typography variant="h5" gutterBottom>
        Đơn hàng của bạn
      </Typography>

      {/* Tabs */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 2 }}> 
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="text"
            onClick={() => setSelectedTab(tab)}
            sx={{
              borderBottom: selectedTab === tab ? '2px solid red' : 'none',
              color: selectedTab === tab ? 'red' : 'inherit'
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Danh sách đơn hàng */}
      {orders.map((order, index) => (
        <Paper key={index} sx={{ padding: { xs: 2, sm: 3 }, marginBottom: 2 }}>
          <Box>
            {/* Tên cửa hàng và trạng thái đơn hàng */}
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between"> 
              <Typography variant="h6">{order.shopName}</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: { xs: 1, sm: 0 } }}> 
                <Typography variant="body2" color="textSecondary">
                  {order.deliveryStatus}
                </Typography>
                <Typography variant="body2" color="error">
                  {order.orderStatus}
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ marginY: 2 }} />

            {/* Thông tin sản phẩm */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}> 
                <Avatar
                  variant="square"
                  src={order.productImage}
                  alt={order.productName}
                  sx={{ width: 64, height: 64, margin: { xs: '0 auto', sm: '0' } }} 
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1">{order.productName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {order.classification}
                </Typography>
                <Typography variant="body2">x{order.quantity}</Typography>
                <Typography variant="body2" color="error">
                  {order.refundTime}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}> 
                <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
                  {order.priceOld.toLocaleString()}₫
                </Typography>
                <Typography variant="body1" color="error">
                  {order.priceNew.toLocaleString()}₫
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ marginY: 2 }} />

            {/* Tổng tiền và nút hành động */}
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Thành tiền: {order.total.toLocaleString()}₫</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: { xs: 2, sm: 0 } }}>
                <Button variant="contained" color="error">
                  Mua Lại
                </Button>
                <Button variant="outlined" color="primary">
                  Liên Hệ Người Bán
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default UserPurchase;
