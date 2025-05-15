import React, { useEffect, useState } from 'react';

const ApprovedContactRequest = () => {
    const [contactRequests, setContactRequests] = useState([]);

    // Fetch all contact requests on load
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch('http://localhost:5000/admin/requests');
                const data = await res.json();
                setContactRequests(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, []);

    // Approve a request (set status: true)
    const handleApproveContact = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/requests/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: true })
            });

            if (res.ok) {
                // Update UI
                setContactRequests(prev =>
                    prev.map(request =>
                        request._id === id ? { ...request, status: true } : request
                    )
                );
            } else {
                console.error('Failed to approve request');
            }
        } catch (error) {
            console.error('Error approving request:', error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">Contact Requests</h2>
            <table className="table-auto w-full border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">Requester Email</th>
                        <th className="border p-2">Target Email</th>
                        <th className="border p-2">Biodata ID</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contactRequests.map(req => (
                        <tr key={req._id}>
                            <td className="border p-2">{req.requesterEmail}</td>
                            <td className="border p-2">{req.targetEmail}</td>
                            <td className="border p-2">{req.targetBiodataId}</td>
                            <td className="border p-2">
                                {req.status ? 'Approved' : 'Pending'}
                            </td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleApproveContact(req._id)}
                                    disabled={req.status}
                                    className={`px-3 py-1 rounded ${req.status
                                            ? 'bg-green-400 cursor-not-allowed'
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                                        }`}
                                >
                                    {req.status ? 'Approved' : 'Approve'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedContactRequest;
