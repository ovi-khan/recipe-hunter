import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';
import Footer from '../pages/Shared/Footer/Footer';
import ChefCard from '../pages/Shared/ChefCard/ChefCard';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='mx-10'>
            <Banner></Banner>
            <ChefCard></ChefCard>
            </div>
            <Footer></Footer>
            <Outlet></Outlet>  
        </div>
    );
};

export default Main;    