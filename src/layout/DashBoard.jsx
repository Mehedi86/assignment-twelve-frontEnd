// layout/Dashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import DashboardNav from '../components/DashboardNav';


const Dashboard = () => {
    return (
        <div>
            <div>
                <DashboardNav />
            </div>
            <div className="min-h-[calc(100vh-204px)] flex">
                <Sidebar />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
