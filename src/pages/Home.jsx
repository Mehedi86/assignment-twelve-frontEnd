import React from 'react';
import Banner from '../components/Banner';
import PremiumMembers from '../components/PremiumMembers';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PremiumMembers/>
            <HowItWorks/>
        </div>
    );
};

export default Home;