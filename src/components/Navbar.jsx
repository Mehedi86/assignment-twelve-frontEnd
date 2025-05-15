import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';




const Navbar = () => {

    const { user, logoutUser } = useAuthInfo();
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log("Logout successful");
            })
            .catch((error) => {
                console.error("Error during logout:", error);
            });
    }

    const isAdmin = user?.email === 'admin@gmail.com';

    return (
        <div>
            <nav className="bg-[#2a2525] border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto p-4">
                    <div className='text-white flex gap-2 items-center'>
                        <img className='w-12' src="/logo.avif" alt="" />
                        <h1 className='font-semibold text-2xl'>MatrimonySite</h1>
                    </div>
                    <div className="flex items-center text-white">
                        {/* login items */}
                        {user ? <>
                            <div className='flex flex-col items-center'>

                                <button onClick={handleLogout} className='cursor-pointer font-semibold'>Logout</button>
                            </div>
                        </>
                            :
                            <>
                                <div className='space-x-2'>
                                    <NavLink to='/login'>Login</NavLink>
                                    <NavLink to='/register'>Register</NavLink>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/dashboard">DashBoard</NavLink>
                            {isAdmin && <NavLink to="/admin">Admin Dashboard</NavLink>}
                            <NavLink to="/biodatas">Biodatas</NavLink>
                            <NavLink>About Us</NavLink>
                            <NavLink>Contact Us</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;

