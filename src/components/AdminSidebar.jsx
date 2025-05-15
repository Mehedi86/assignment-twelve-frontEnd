import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const AdminSidebar = () => {
    const { logoutUser } = useAuthInfo();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('Logout successful'))
            .catch((error) => console.error('Error during logout:', error));
    };

    const adminMenuItems = [
        { name: 'Admin Dashboard', path: '/admin' },
        { name: 'Manage Users', path: '/admin/manageUsers' },
        { name: 'Approved Contact Requests', path: '/admin/approveContact' },
        { name: 'Approved Premium Users', path: '/admin/approvePremium' },
    ];

    return (
        <aside className="w-64 bg-gray-100 p-5 border-r h-full flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <ul className="space-y-3">
                    {adminMenuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                end  // ✅ Add this line
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded hover:bg-blue-100 ${isActive ? 'bg-blue-200 font-semibold' : ''
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="space-y-2 mt-10">
                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-[#009689] hover:bg-[#00786f] text-white font-semibold px-4 py-2 rounded"
                >
                    Back to Home
                </button>
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
