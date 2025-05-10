import React, { useEffect, useState } from 'react';
import BiodataCard from './BiodataCard';

const PremiumMembers = () => {
    const [premiumProfiles, setPremiumProfiles] = useState([]);

    useEffect(() => {
        fetch('/biodatas.json')
            .then(res => res.json())
            .then(data => {
                // Filter premium members
                const premiumMembers = data.filter(profile => profile.isPremium);
                setPremiumProfiles(premiumMembers);
            });
    }, []);

    return (
        <div className='container mx-auto border border-stone-200 rounded p-6'>
            <h1 className='text-4xl font-semibold text-center py-12'>Premium Members</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                    premiumProfiles.map(premium => (
                        <BiodataCard key={premium.biodataId} biodata={premium} />
                    ))
                }
            </div>
        </div>
    );
};

export default PremiumMembers;
