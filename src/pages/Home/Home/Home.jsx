import React from 'react';
import { useNavigation } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import ChefCard from '../../Shared/ChefCard/ChefCard';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div className='mx-10'>
            <div className='text-4xl'>{navigation.state === 'loading' && 'Loading...'}</div>
            <Banner></Banner>
            <ChefCard></ChefCard>
        </div>
    );
};

export default Home;    