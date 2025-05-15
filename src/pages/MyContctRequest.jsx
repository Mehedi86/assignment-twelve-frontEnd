import React, { useEffect, useState, useContext } from 'react';

// Simulating a context to get logged-in user
// Replace with your actual auth context
const AuthContext = React.createContext({ user: { email: "user1@example.com" } });

const MyContactRequest = () => {
    const { user } = useContext(AuthContext);
    const [contactRequests, setContactRequests] = useState([]);
    console.log(user);
    useEffect(() => {
        const fetchMyRequests = async () => {
            try {
                const res = await fetch('http://localhost:5000/admin/requests');
                const data = await res.json();

                // Filter based on logged-in user email
                const filtered = data.filter(req => req.targetEmail === user.email);
                setContactRequests(filtered);
            } catch (error) {
                console.error('Error fetching contact requests:', error);
            }
        };

        fetchMyRequests();
    }, [user.email]);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">My Contact Requests</h2>
            <table className="table-auto w-full border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">Requester Email</th>
                        <th className="border p-2">Biodata ID</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Requested At</th>
                    </tr>
                </thead>
                <tbody>
                    {contactRequests.map(req => (
                        <tr key={req._id}>
                            <td className="border p-2 text-center">{req.requesterEmail}</td>
                            <td className="border p-2 text-center">{req.targetBiodataId}</td>
                            <td className="border p-2 text-center">
                                {req.status ? 'Approved' : 'Pending'}
                            </td>
                            <td className="border p-2 text-center">
                                {new Date(req.createdAt).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyContactRequest;
