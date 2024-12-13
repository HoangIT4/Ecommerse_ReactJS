import React, { useState } from 'react';
import { Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Drawer, IconButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import { MdEdit } from "react-icons/md";
import { useMediaQuery } from '@mui/material';

const UserSideBar = ({ avatar, show, handleClose }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 991.20px)');

  const handleAdressClick = () => {
    navigate(`/user/address`);
    if (isMobile) handleClose(); 
  };

  const handlePurchaseClick = () => {
    navigate(`/user/purchase`);
    if (isMobile) handleClose(); 
  };

  const handleNotificationClick = () => {
    navigate(`/user/notification`);
    if (isMobile) handleClose(); 
  };

  const handleChangePasswordClick = () => {
    navigate(`/user/change_password`);
    if (isMobile) handleClose(); 
  };

  const handleProfileClick = () => {
    navigate(`/user/profile`);
    if (isMobile) handleClose(); 
  };

  const sidebarContent = (
    <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }} >
      <Stack direction="horizontal"  style={{display:'flex',alignItems:'center',flexDirection:'column',paddingBottom:'20px' }}>
        <Avatar
          sx={{ width: 80, height: 80, marginBottom: 2 }}
          src={avatar}
          onClick={handleProfileClick}
          style={{ cursor: 'pointer'}}
        />
        <Stack gap={2} onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <Typography variant="h6">Phạm Minh Hoàng</Typography>
          <div   style={{flexDirection:'row',display:'flex',gap:'20px',justifyContent:'flex-start',alignItems:'center'}}>
            <MdEdit />
            <Typography variant="body2" color="textSecondary">Sửa Hồ Sơ</Typography>
          </div>
        </Stack>
      </Stack>
      <List>
        <ListItem button onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <ListItemIcon><AccountBoxIcon /></ListItemIcon>
          <ListItemText primary="Hồ Sơ" />
        </ListItem>
        <ListItem button onClick={handleAdressClick} style={{ cursor: 'pointer' }}>
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary="Địa Chỉ" />
        </ListItem>
        <ListItem button onClick={handleChangePasswordClick} style={{ cursor: 'pointer' }}>
          <ListItemIcon><LockIcon /></ListItemIcon>
          <ListItemText primary="Đổi Mật Khẩu" />
        </ListItem>
        <ListItem button onClick={handleNotificationClick} style={{ cursor: 'pointer' }}>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Thông Báo" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handlePurchaseClick} style={{ cursor: 'pointer' }}>
          <ListItemIcon><ShoppingBasketIcon /></ListItemIcon>
          <ListItemText primary="Đơn Mua" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>

      {/* Drawer cho màn hình nhỏ */}
      <Drawer
        anchor="left"
        open={show}
        onClose={handleClose}
        sx={{
          display: { xs: 'block', sm: 'block' }, 
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Sidebar thông thường cho màn hình lớn */}
      {!isMobile && (
        <Box
          sx={{
            minWidth: '260px',
            padding: 2,
            backgroundColor: '#f5f5f5',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {sidebarContent}
        </Box>
      )}
    </>
  );
};

export default UserSideBar;
