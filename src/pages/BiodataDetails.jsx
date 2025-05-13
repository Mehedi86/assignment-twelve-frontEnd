import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaLock } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const BiodataDetails = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { user } = useAuthInfo();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/biodatas');
                const allData = await res.json();

                let biodata;
                if (!id) {
                    biodata = allData.find(item => item.contactEmail === user?.email);
                } else {
                    biodata = allData.find(item => item.biodataId === id);
                }

                setData(biodata || null);

                // Check if already favorited
                if (user?.email && biodata?.biodataId) {
                    const favRes = await fetch(`http://localhost:5000/favourites?email=${user.email}&biodataId=${biodata.biodataId}`);
                    const favData = await favRes.json();
                    setIsFavorite(favData.isFavorite);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id, user?.email]);

    const toggleFavorite = async () => {
        if (!data?.biodataId || !user?.email) return;

        const favouriteData = {
            userEmail: user.email,
            biodataId: data.biodataId,
        };

        try {
            const res = await fetch('http://localhost:5000/favourites', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(favouriteData),
            });

            const result = await res.json();

            if (result.insertedId) {
                setIsFavorite(true); // Successfully added to favorites
            }
        } catch (err) {
            console.error('Failed to add to favorites:', err);
        }
    };

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md text-center">
                <p>Loading biodata details...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="max-w-4xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md text-center">
                <p>Biodata not found</p>
            </div>
        );
    }

    const isPremiumUser = user?.isPremium || false;
    const isOwnBiodata = data.contactEmail === user?.email;

    return (
        <div className="max-w-4xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <img
                        src={data.profileImage || ''}
                        alt="Profile"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    {!isOwnBiodata && (
                        <button
                            onClick={toggleFavorite}
                            className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-100 text-pink-600 py-2 px-4 rounded-lg transition disabled:opacity-50"
                            disabled={isFavorite}
                        >
                            {isFavorite ? (
                                <><FaHeart /> Added to Favorites</>
                            ) : (
                                <><FaRegHeart /> Add to Favorites</>
                            )}
                        </button>
                    )}
                </div>

                <div className="w-full md:w-2/3">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Biodata ID: {data.biodataId} ({data.biodataType})
                    </h1>
                    <p className="text-gray-600 mb-6">Age: {data.age} years</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Personal Information</h2>
                            <p className="text-gray-600">Marital Status: <span className="text-gray-800">{data.maritalStatus}</span></p>
                            <p className="text-gray-600">Height: <span className="text-gray-800">{data.height}</span></p>
                            <p className="text-gray-600">Date of Birth: <span className="text-gray-800">{data.dateOfBirth}</span></p>
                            <p className="text-gray-600">Occupation: <span className="text-gray-800">{data.occupation}</span></p>
                            <p className="text-gray-600">Race: <span className="text-gray-800">{data.race}</span></p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Family Information</h2>
                            <p className="text-gray-600">Father's Name: <span className="text-gray-800">{data.fatherName}</span></p>
                            <p className="text-gray-600">Mother's Name: <span className="text-gray-800">{data.motherName}</span></p>
                            <p className="text-gray-600">Present Division: <span className="text-gray-800">{data.presentDivision}</span></p>
                            <p className="text-gray-600">Permanent Division: <span className="text-gray-800">{data.PermanentDivision}</span></p>
                        </div>

                        <div className="space-y-4 md:col-span-2">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Partner Expectations</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <p className="text-gray-600">Age: <span className="text-gray-800">{data.expectedPartnerAge} years</span></p>
                                <p className="text-gray-600">Height: <span className="text-gray-800">{data.expectedPartnerHeight}</span></p>
                                <p className="text-gray-600">Weight: <span className="text-gray-800">{data.expectedPartnerWeight} kg</span></p>
                            </div>
                        </div>

                        <div className="space-y-4 md:col-span-2">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
                                Contact Information
                                {!isPremiumUser && !isOwnBiodata && <FaLock className="text-yellow-500" />}
                            </h2>

                            {(isPremiumUser || isOwnBiodata) ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <p className="text-gray-600">Email: <span className="text-gray-800">{data.contactEmail}</span></p>
                                    <p className="text-gray-600">Mobile: <span className="text-gray-800">{data.mobileNumber}</span></p>
                                </div>
                            ) : (
                                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                                    <p className="text-yellow-700 flex items-center justify-center gap-2">
                                        <FaLock /> This information is only available to premium members
                                    </p>
                                    <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                                        Upgrade to Premium
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;
