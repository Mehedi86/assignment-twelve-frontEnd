import React, { useEffect, useState } from 'react';
import BiodataCard from './BiodataCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PremiumMembers = () => {
    const [premiumProfiles, setPremiumProfiles] = useState([]);

    useEffect(() => {
        fetch('/biodatas.json')
            .then(res => res.json())
            .then(data => {
                const premium = data.filter(profile => profile.isPremium);
                setPremiumProfiles(premium);
            });
    }, []);

    return (
        <div className='container mx-auto border border-stone-200 rounded p-6'>
            <h1 className='text-4xl font-semibold text-center py-12'>Premium Members</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 }
                }}
            >
                {
                    premiumProfiles.map(profile => (
                        <SwiperSlide key={profile.biodataId} className="pb-6">
                            <BiodataCard biodata={profile} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default PremiumMembers;
