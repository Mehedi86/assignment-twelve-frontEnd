import React, { use } from 'react';
import { NavLink } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';




const Navbar = () => {
    const {user} = useAuthInfo();
    return (
        // <div className='flex justify-between items-center h-16 w-full bg-[#2a2525] px-2'>
        //     {/* logo and name */}
        // <div className='text-white flex gap-2 items-center'>
        //     <img className='w-12' src="/logo.avif" alt="" />
        //     <h1 className='font-semibold text-2xl'>MatrimonySite</h1>
        // </div>
        //     {/* navigation items */}
        //     <div className='text-white space-x-2'>
        //         <NavLink to="/">Home</NavLink>
        //         <NavLink to="/dashboard">DashBoard</NavLink>
        //         <NavLink to="/biodatas">Biodatas</NavLink>
        //         <NavLink>About Us</NavLink>
        //         <NavLink>Contact Us</NavLink>
        //     </div>
        //     <div className='text-white space-x-2'>
        //         <NavLink>Login</NavLink>
        //         <NavLink>Logout</NavLink>

        //     </div>
        // </div>
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
                                
                                <button  className='cursor-pointer font-semibold'>Logout</button>
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
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;

