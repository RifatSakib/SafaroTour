import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../Banner/Banner';

import BestDestination from '../../BestDestination/BestDestination';
import Steps from '../../Steps/Steps';
import TopPlace from '../../TopPlace/TopPlace';
import WhySafana from '../../WhySafana/WhySafana';
import Reeviews from '../../Reviews/Reeviews';
import Promotion from '../../Promotion/Promotion';
import MFirst from '../../MFirst/MFirst';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Safora | Home</title>
            </Helmet>
            <div className='hidden md:block'>
                <Banner></Banner>
            </div>

            <div className='hidden md:block'><BestDestination></BestDestination></div>
            <div className='hidden md:block'><Steps></Steps></div>
            <div className='hidden md:block'><WhySafana></WhySafana><TopPlace></TopPlace></div>
            <div className='hidden md:block'><Reeviews></Reeviews></div>
            <div className='hidden md:block'><Promotion ></Promotion></div>
            <div className='block md:hidden'><MFirst></MFirst></div>

















        </div>
    );
};

export default Home;