import React from 'react';
import { FaEye, FaShareAlt } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";

const BiodataCard = ({ biodata }) => {
    const { age, biodataId, biodataType, height, maritalStatus, occupation, permanentDivision, profileImage } = biodata;

    return (
        <div className={`bg-white shadow-md rounded overflow-hidden w-full`}>
            {/* Header */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex items-center space-x-2">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border border-gray-400"
                    />
                    <div className="text-gray-400 font-bold">
                        <span className="text-sm">Biodata No: {biodataId}</span>
                        <div className="flex gap-2 items-center">
                            <FaEye className="w-4 h-4" />
                            <span>1</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center max-h-[40px] px-4 rounded border border-gray-400">
                    <CiHeart className="font-bold text-[#e60076]" size={28} />
                </div>
            </div>

            {/* Info Table */}
            <div className="p-4 text-xl text-gray-700">
                <div className="flex border-y-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Marital Status</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{maritalStatus}</p>
                    </div>
                </div>
                <div className="flex border-b-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Permanent Address</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{permanentDivision}</p>
                    </div>
                </div>
                <div className="flex border-b-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Age</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{age}</p>
                    </div>
                </div>
                <div className="flex border-b-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Height</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{height}</p>
                    </div>
                </div>
                <div className="flex border-b-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Occupation</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{occupation}</p>
                    </div>
                </div>
                <div className="flex border-b-2 border-gray-200">
                    <div className="w-1/2 border-r-2 border-gray-200 py-2">
                        <p className="pl-4">Biodata Type</p>
                    </div>
                    <div className="w-1/2 py-2">
                        <p className="pl-4">{biodataType}</p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center px-4 pb-4">
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-black">
                    <FaShareAlt className="w-4 h-4" />
                    <span>Share</span>
                </button>
                <button className="mt-3 px-4 py-2 font-semibold bg-[#e60076] text-white rounded cursor-pointer hover:scale-105">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default BiodataCard;


