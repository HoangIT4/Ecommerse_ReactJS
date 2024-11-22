import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from '@/routers/index';
import { SideBarProvider } from '@/context/SidebarProvider';
import Sidebar from './components/SideBar/SideBar';
import MyHeader from './components/Header/Header';
import MyFooter from './components/Footer/Footer';
import MainLayout from './components/Layout/Layout';
import '@styles/main.scss';
import { ToastProvider } from '@/context/ToastProvider';
import { StoreProvider } from '@/context/StoreProvider';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


function App() {
 
 
  return (   
    <BrowserRouter>
      <StoreProvider>
        <ToastProvider>
          <SideBarProvider>
            <Sidebar/>
                <MyHeader/>
                  <Router />
                <MyFooter/>
          </SideBarProvider>
        </ToastProvider>
      </StoreProvider>
    </BrowserRouter>  

   
  )
}

export default App
