import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import DashboardNav from '../components/DashboardNav';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Navigation (passes toggle function) */}
            <DashboardNav onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex flex-1">
                {/* Sidebar for desktop */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                {/* Sidebar for mobile (overlay) */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}>
                        <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg" onClick={e => e.stopPropagation()}>
                            <Sidebar />
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="w-full p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
