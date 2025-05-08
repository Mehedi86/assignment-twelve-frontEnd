import React from 'react';

const BiodataCard = ({ premiumProfile }) => {
    const { age, biodataId, biodataType, occupation, permanentDivision, profileImage } = premiumProfile;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 w-full  mx-auto">
            <div className='flex justify-center'>
                <img
                    src={'/man.png'}
                    alt={`Profile of ${biodataType}`}
                    className="w-40 mx-atuo"
                />
            </div>
            <div className="mt-4 space-y-1 text-center">
                <p className="text-lg font-semibold">Biodata ID: {biodataId}</p>
                <p>Type: {biodataType}</p>
                <p>Age: {age}</p>
                <p>Occupation: {occupation}</p>
                <p>Division: {permanentDivision}</p>
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default BiodataCard;
