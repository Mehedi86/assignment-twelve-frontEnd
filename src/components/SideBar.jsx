// components/Sidebar.jsx
import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { logoutUser } = useAuthInfo();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => console.log('Logout successful'))
      .catch((error) => console.error('Error during logout:', error));
  };

  const menuItems = [
    { name: 'Edit Biodata', path: '/dashboard/editBiodata' },
    { name: 'View Biodata', path: '/dashboard/myBiodata' },
    { name: 'My Contact Request', path: '/dashboard/contactsRequest' },
    { name: 'Favourites Biodata', path: '/dashboard/favourites' },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-5 border-r border-b flex flex-col justify-between h-[450px]">
      <div>
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-blue-100 ${
                    isActive ? 'bg-blue-200 font-semibold' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 space-y-2">
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#009689] hover:bg-[#00786f] text-black font-semibold px-4 py-2 rounded"
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

export default Sidebar;
