import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-16 w-full bg-[#2a2525] px-2'>
            {/* logo and name */}
            <div className='text-white flex gap-2 items-center'>
                <img className='w-12' src="/logo.avif" alt="" />
                <h1 className='font-semibold text-2xl'>MatrimonySite</h1>
            </div>
            {/* navigation items */}
            <div className='text-white space-x-2'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">DashBoard</NavLink>
                <NavLink to="/biodatas">Biodatas</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Contact Us</NavLink>
            </div>
            <div className='text-white space-x-2'>
                <NavLink>Login</NavLink>
                <NavLink>Logout</NavLink>
            </div>
        </div>
    );
};

export default Navbar;