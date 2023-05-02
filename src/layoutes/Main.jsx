import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>  
        </div>
    );
};

export default Main;    