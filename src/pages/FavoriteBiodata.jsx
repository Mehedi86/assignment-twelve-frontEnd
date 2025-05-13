import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const FavoriteBiodata = () => {
    const { user } = useAuthInfo();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await fetch(`http://localhost:5000/favourites/list?email=${user?.email}`);
                const data = await res.json();
                console.log('Fetched favorites:', data);

                setFavorites(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching favorites:', err);
                setFavorites([]);
            } finally {
                setLoading(false); // ✅ Must be called regardless of success/failure
            }
        };

        if (user?.email) {
            fetchFavorites();
        } else {
            setLoading(false); // ✅ Avoid infinite loading if user is not yet loaded
        }
    }, [user?.email]);



    const handleRemove = async (biodataId) => {
        const confirm = window.confirm('Are you sure you want to remove from favorites?');
        if (!confirm) return;

        try {
            const res = await fetch(`http://localhost:5000/favourites?email=${user.email}&biodataId=${biodataId}`, {
                method: 'DELETE',
            });

            const result = await res.json();
            if (result.deletedCount > 0) {
                setFavorites(prev => prev.filter(item => item.biodataId !== biodataId));
            }
        } catch (err) {
            console.error('Error removing from favorites:', err);
        }
    };

    if (loading) {
        return <div className="text-center my-10">Loading favorite biodatas...</div>;
    }

    if (favorites.length === 0) {
        return <div className="text-center my-10 text-gray-600">You haven't added any biodata to favorites yet.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">My Favorite Biodatas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map(bio => (
                    <div key={bio._id} className="bg-white shadow-md rounded-lg p-4">
                        <img
                            src={bio.biodataType === 'male' ? '/male.jpg' : '/female.webp'}
                            alt="Profile"
                            className="w-full object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">Profession: {bio.occupation}</h2>
                        <p className="text-gray-600 mb-4">Age: {bio.age} years</p>

                        <div className="flex justify-between items-center gap-2">
                            <Link to={`/biodata/${bio.biodataId}`}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                    View Full Biodata
                                </button>
                            </Link>
                            <button
                                onClick={() => handleRemove(bio.biodataId)}
                                className="bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200 transition"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteBiodata;
