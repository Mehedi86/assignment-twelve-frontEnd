import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="h-[600px] bg-[url(/banner.jpg)] bg-black/40 bg-blend-overlay bg-center bg-cover flex items-center justify-center">
            <div>
                <div>
                    <p className="text-white text-2xl text-center md:text-4xl lg:text-6xl font-bold">
                        Welcome to Matrimony Service
                    </p>
                </div>
                <h1 className="md:text-2xl font-bold text-white px-6 py-4 rounded-xl text-center">
                    <TypeAnimation
                        sequence={[
                            'Welcome to Matrimony Service',
                            2000,
                            'Your journey to a lifelong bond begins here',
                            2000,
                            'Find the one who completes your story.',
                            2000
                        ]}
                        speed={153}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </h1>
            </div>
        </div>
    );
};

export default Banner;
