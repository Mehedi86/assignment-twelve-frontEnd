import React from 'react';
import Banner from '../components/Banner';
import PremiumMembers from '../components/PremiumMembers';
import HowItWorks from '../components/HowItWorks';
import Success from '../components/Success';
import SuccessStory from '../components/SuccessStory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PremiumMembers/>
            <HowItWorks/>
            <Success/>
            <SuccessStory/>
        </div>
    );
};

export default Home;