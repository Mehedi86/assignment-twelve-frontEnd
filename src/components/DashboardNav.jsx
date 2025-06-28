import React from 'react';
import { Menu } from 'lucide-react'; // or use Heroicons, FontAwesome, etc.

const DashboardNav = ({ onSidebarToggle }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            {/* Hamburger menu (only visible on small screens) */}
            <button className="md:hidden" onClick={onSidebarToggle}>
                <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
    );
};

export default DashboardNav;
