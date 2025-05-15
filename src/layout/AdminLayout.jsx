import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      
      <div className='flex flex-1'>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <div className='flex-1 p-6 bg-gray-50 min-h-[calc(100vh-360px)]'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;
