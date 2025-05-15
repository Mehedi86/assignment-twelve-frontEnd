// ManageUsers.jsx
import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Replace with API call
        setUsers([
            { id: 1, name: 'User 1', email: 'user1@gmail.com', isAdmin: false, isPremium: false },
            { id: 2, name: 'User 2', email: 'user2@gmail.com', isAdmin: false, isPremium: false },
            // More users...
        ]);
    }, []);

    const handleMakeAdmin = (userId) => {
        // API call to make user admin
        console.log(`Make user ${userId} admin`);
    };

    const handleMakePremium = (userId) => {
        // API call to make user premium
        console.log(`Make user ${userId} premium`);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Make Admin</th>
                        <th className="border p-2">Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">
                                <button onClick={() => handleMakeAdmin(user.id)} className="bg-blue-500 text-white px-2 py-1">Make Admin</button>
                            </td>
                            <td className="border p-2">
                                <button onClick={() => handleMakePremium(user.id)} className="bg-yellow-500 text-white px-2 py-1">Make Premium</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
