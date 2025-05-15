import React, { useEffect, useState, useContext } from 'react';
import useAuthInfo from '../hooks/useAuthInfo';

// Simulating a context to get logged-in user
// Replace with your actual auth context
const AuthContext = React.createContext({ user: { email: "user1@example.com" } });

const MyContactRequest = () => {
    const { user } = useAuthInfo();
    const [contactRequests, setContactRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMyRequests = async () => {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:5000/requests");

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();



                const filtered = data.filter(req => req.requesterEmail === user.email);
                setContactRequests(filtered);
                //         setError(null);
                //     } catch (error) {
                //         console.error('Error fetching contact requests:', error);
                //         setError('Failed to load contact requests');
                //         setContactRequests([]);
            } finally {
                setLoading(false);
            }
        }

        fetchMyRequests();
    }, []);

    if (loading) {
        return <div className="text-center py-4">Loading your contact requests...</div>;
    }

    if (error) {
        return <div className="text-center py-4 text-red-500">{error}</div>;
    }
    
    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">My Contact Requests</h2>

            {contactRequests.length === 0 ? (
                <p className="text-gray-500">You haven't made any contact requests yet.</p>
            ) : (
                <table className="table-auto w-full border-collapse border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Biodata ID</th>
                            <th className="border p-2">Target Email</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Requested At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactRequests.map(req => (
                            <tr key={req._id} className="hover:bg-gray-50">
                                <td className="border p-2 text-center">{req.targetBiodataId}</td>
                                <td className="border p-2 text-center">{req.targetEmail}</td>
                                <td className="border p-2 text-center">
                                    <span className={`px-2 py-1 rounded-full text-xs ${req.status
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {req.status ? 'Approved' : 'Pending'}
                                    </span>
                                </td>
                                <td className="border p-2 text-center">
                                    {new Date(req.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyContactRequest;
