// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [stats, setStats] = useState({
        total: 0,
        male: 0,
        female: 0,
        premium: 0,
        revenue: 0,
    });

    useEffect(() => {
        // Dummy API call to get stats
        setStats({
            total: 1000,
            male: 500,
            female: 500,
            premium: 200,
            revenue: 5000,
        });
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-lg font-semibold">Total Biodata</h2>
                <p>{stats.total}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-lg font-semibold">Male Biodata</h2>
                <p>{stats.male}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-lg font-semibold">Female Biodata</h2>
                <p>{stats.female}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-lg font-semibold">Premium Biodata</h2>
                <p>{stats.premium}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-md col-span-2">
                <h2 className="text-lg font-semibold">Total Revenue</h2>
                <p>${stats.revenue}</p>
            </div>
        </div>
    );
};

export default Admin;
