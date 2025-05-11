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
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
