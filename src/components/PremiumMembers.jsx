import React, { useEffect, useState } from 'react';
import BiodataCard from './BiodataCard';

const PremiumMembers = () => {
    const [premiumProfiles, setPremiumProfiles] = useState([]);

    useEffect(() => {
        fetch('/premium-members.json')
            .then(res => res.json())
            .then(data => setPremiumProfiles(data))
    }, [])
    return (
        <div className='container mx-auto border border-stone-200 rounded p-6'>
            <h1 className='text-4xl font-semibold text-center py-12'>Premium Members </h1>
            <div className='grid grid-cols-4 gap-6'>
                {premiumProfiles.map((premiumProfile, index) => <BiodataCard key={index} premiumProfile={premiumProfile} />)}
            </div>
        </div>
    );
};

export default PremiumMembers;