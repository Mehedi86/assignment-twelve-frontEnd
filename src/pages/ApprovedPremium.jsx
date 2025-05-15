// ApprovedPremium.jsx
import React, { useState, useEffect } from 'react';

const ApprovedPremium = () => {
    const [premiumRequests, setPremiumRequests] = useState([]);

    useEffect(() => {
        // Replace with an API call to fetch premium requests
        setPremiumRequests([
            { id: 1, name: 'User 1', email: 'user1@gmail.com', biodataId: '123', isPremium: false },
            { id: 2, name: 'User 2', email: 'user2@gmail.com', biodataId: '124', isPremium: false },
            // More requests...
        ]);
    }, []);

    const handleApprovePremium = (id) => {
        // API call to approve premium request
        console.log(`Approved premium for ${id}`);
    };

    return (
        <div>
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Biodata ID</th>
                        <th className="border p-2">Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {premiumRequests.map(request => (
                        <tr key={request.id}>
                            <td className="border p-2">{request.name}</td>
                            <td className="border p-2">{request.email}</td>
                            <td className="border p-2">{request.biodataId}</td>
                            <td className="border p-2">
                                <button onClick={() => handleApprovePremium(request.id)} className="bg-green-500 text-white px-2 py-1">Approve</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedPremium;
