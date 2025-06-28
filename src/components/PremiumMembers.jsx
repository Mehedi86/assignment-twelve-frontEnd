import React, { useEffect, useState } from 'react';
import BiodataCard from './BiodataCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PremiumMembers = () => {
    const [premiumProfiles, setPremiumProfiles] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-backend-sigma.vercel.app/biodatas')
            .then(res => res.json())
            .then(data => {
                const premium = data.filter(profile => profile.isPremium);
                setPremiumProfiles(premium);
            });
    }, []);

    return (
        <div className='mx-auto border border-stone-200 rounded p-4 sm:p-6'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center py-6 sm:py-10'>
                Premium Members
            </h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation
                breakpoints={{
                    0: { slidesPerView: 1 },       // Mobile
                    320: { slidesPerView: 1 },     // Small tablets
                    768: { slidesPerView: 2 },     // Tablets
                    1024: { slidesPerView: 3 },    // Small desktops
                    1280: { slidesPerView: 4 }     // Large desktops
                }}
            >
                {premiumProfiles.map(profile => (
                    <SwiperSlide key={profile.biodataId} className="pb-6">
                        <BiodataCard biodata={profile} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PremiumMembers;
