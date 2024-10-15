import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from '@/routers/index';
import { SideBarProvider } from '@/context/SidebarProvider';
import Sidebar from './components/SideBar/SideBar';
import MyHeader from './components/Header/Header';
import MyFooter from './components/Footer/Footer';
import MainLayout from './components/Layout/Layout';
import '@styles/main.scss';

function App() {
 
 
  return (   
    <SideBarProvider>
      <Sidebar/>
      <BrowserRouter>
        <MyHeader/>
          <Router />
        <MyFooter/>
      </BrowserRouter>
       
    </SideBarProvider>

   
  )
}

export default App
