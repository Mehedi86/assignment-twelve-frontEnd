import React from 'react';

const DashboardNav = () => {
    return (
        <div className='bg-[#333333] pb-4'>
            <h1 className='text-6xl text-center p-2 text-white'>Welcome to DashBoard</h1>
            <div>
                <div className='bg-[#fbf9f9] p-2 rounded-lg shadow-md text-xl flex items-center gap-4 m-2 w-[400px] mx-auto'>
                    <div>
                        <img className='w-20' src="/man.png" alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold'>Name: <span>Faisal Hasan</span></h1>
                        <h1 className='font-bold'>Email: <span>faisalMir@gmail.com</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;