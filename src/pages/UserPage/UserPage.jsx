import UserSideBar from "./UserSidebar";
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Container } from "react-bootstrap";
import styles from '@styles/User/UserSideBar.module.scss'

const UserPage = ({ children }) =>{
    const {container} = styles

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        console.log('show', showSidebar);
    };
    return ( 
        <Container>
            <Box display="flex">
                <UserSideBar show={showSidebar} handleClose={toggleSidebar}   />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
                    {children}
                </Box>
            </Box>
        </Container>
     );
}

export default UserPage;