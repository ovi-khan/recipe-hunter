import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>          
            <Outlet></Outlet>  
            <div className='mt-48'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;    