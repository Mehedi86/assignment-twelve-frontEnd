import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className='container mx-auto border border-stone-200 rounded p-6 mt-12'>
            <h1 className='text-4xl font-semibold text-center py-12'>How it Works</h1>
            <h1 className='text-center text-xl text-[#2a2525]'>Lets make a short tour about how can you use this website to get your preffred outcome</h1>

            <div className='flex justify-center my-12'>
                <button className='bg-[#2a2525] text-white px-6 py-2 rounded font-semibold text-xl flex gap-2 items-center cursor-pointer hover:scale-105'><FaArrowRight size={20} /><p className='pb-1'>Lets go</p></button>
            </div>
        </div>
    );
};

export default HowItWorks;