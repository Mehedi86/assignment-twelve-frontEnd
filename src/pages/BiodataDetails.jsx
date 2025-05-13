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
        fetch('http://localhost:5000/biodatas')
            .then(res => res.json())
            .then(data => {
                let biodata;
                if (id === null || id === undefined) {
                    // If no ID, find the user's own biodata
                    biodata = data.find(item => item.contactEmail === user?.email);
                } else {
                    // Find biodata by ID
                    biodata = data.find(item => item.biodataId === id);
                }
                setData(biodata || null);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching biodata:', error);
                setLoading(false);
            });
    }, [id, user?.email]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        // Here you would typically make an API call to update favorites
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

    // Check if current user is premium (using actual user data from auth)
    const isPremiumUser = user?.isPremium || false;
    // Check if this is the user's own biodata
    const isOwnBiodata = data.contactEmail === user?.email;

    return (
        <div className="max-w-4xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="w-full md:w-1/3">
                    <img 
                        src={data.profileImage || 'https://via.placeholder.com/300'} 
                        alt="Profile" 
                        className="w-full h-auto rounded-lg object-cover"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300';
                        }}
                    />
                    {!isOwnBiodata && (
                        <button 
                            onClick={toggleFavorite}
                            className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-100 text-pink-600 py-2 px-4 rounded-lg hover:bg-pink-200 transition"
                        >
                            {isFavorite ? (
                                <><FaHeart /> Added to Favorites</>
                            ) : (
                                <><FaRegHeart /> Add to Favorites</>
                            )}
                        </button>
                    )}
                </div>

                {/* Biodata Information */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Biodata ID: {data.biodataId} ({data.biodataType})
                    </h1>
                    <p className="text-gray-600 mb-6">Age: {data.age} years</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Personal Information</h2>
                            <div>
                                <p className="text-gray-600">Marital Status: <span className="text-gray-800">{data.maritalStatus}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Height: <span className="text-gray-800">{data.height}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Date of Birth: <span className="text-gray-800">{data.dateOfBirth}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Occupation: <span className="text-gray-800">{data.occupation}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Race: <span className="text-gray-800">{data.race}</span></p>
                            </div>
                        </div>

                        {/* Family Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Family Information</h2>
                            <div>
                                <p className="text-gray-600">Father's Name: <span className="text-gray-800">{data.fatherName}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Mother's Name: <span className="text-gray-800">{data.motherName}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Present Division: <span className="text-gray-800">{data.presentDivision}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600">Permanent Division: <span className="text-gray-800">{data.PermanentDivision}</span></p>
                            </div>
                        </div>

                        {/* Partner Expectations */}
                        <div className="space-y-4 md:col-span-2">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Partner Expectations</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-gray-600">Age: <span className="text-gray-800">{data.expectedPartnerAge} years</span></p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Height: <span className="text-gray-800">{data.expectedPartnerHeight}</span></p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Weight: <span className="text-gray-800">{data.expectedPartnerWeight} kg</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information (Premium Only or Own Biodata) */}
                        <div className="space-y-4 md:col-span-2">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
                                Contact Information
                                {!isPremiumUser && !isOwnBiodata && <FaLock className="text-yellow-500" />}
                            </h2>
                            
                            {(isPremiumUser || isOwnBiodata) ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600">Email: <span className="text-gray-800">{data.contactEmail}</span></p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Mobile: <span className="text-gray-800">{data.mobileNumber}</span></p>
                                    </div>
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