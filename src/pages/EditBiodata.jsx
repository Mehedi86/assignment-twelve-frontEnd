import React, { useState } from 'react';
import useAuthInfo from '../hooks/useAuthInfo';

const EditBiodata = () => {
    const { user } = useAuthInfo();
    const [showPassword, setShowPassword] = useState(false);
    const [biodata, setBiodata] = useState({
        biodataType: '',
        name: '',
        profileImage: '',
        dateOfBirth: '',
        height: '',
        weight: '',
        age: '',
        occupation: '',
        race: '',
        fathersName: '',
        mothersName: '',
        permanentDivision: '',
        presentDivision: '',
        expectedPartnerAge: '',
        expectedPartnerHeight: '',
        expectedPartnerWeight: '',
        contactEmail: user?.email || '',
        mobileNumber: ''
    });

    const divisions = ['Dhaka', 'Chattagram', 'Rangpur', 'Barisal', 'Khulna', 'Mymensingh', 'Sylhet'];
    const heights = Array.from({ length: 51 }, (_, i) => 140 + i); // 140cm to 190cm
    const weights = Array.from({ length: 61 }, (_, i) => 40 + i); // 40kg to 100kg
    const occupations = ['Doctor', 'Engineer', 'Teacher', 'Business', 'Government Job', 'Private Job', 'Student', 'Other'];
    const races = ['Fair', 'Light Brown', 'Dark Brown', 'Black'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBiodata(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Biodata submitted:", biodata);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="mx-auto w-[900px] my-12">
            <form onSubmit={handleSubmit}>
                {/* Biodata Type */}
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biodata Type</label>
                    <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="biodataType"
                                value="Male"
                                checked={biodata.biodataType === 'Male'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600 dark:text-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700 dark:text-gray-300">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="biodataType"
                                value="Female"
                                checked={biodata.biodataType === 'Female'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600 dark:text-blue-500"
                            />
                            <span className="ml-2 text-gray-700 dark:text-gray-300">Female</span>
                        </label>
                    </div>
                </div>

                {/* Name */}
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        value={biodata.name}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="John Doe"
                        required
                    />
                </div>

                {/* Profile Image */}
                <div className="mb-5">
                    <label htmlFor="profileImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image Link</label>
                    <input
                        name="profileImage"
                        type="url"
                        id="profileImage"
                        value={biodata.profileImage}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="https://example.com/photo.jpg"
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-5">
                    <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                    <input
                        name="dateOfBirth"
                        type="date"
                        id="dateOfBirth"
                        value={biodata.dateOfBirth}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    />
                </div>

                {/* Height */}
                <div className="mb-5">
                    <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height (cm)</label>
                    <select
                        name="height"
                        id="height"
                        value={biodata.height}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Height</option>
                        {heights.map(height => (
                            <option key={height} value={height}>{height} cm</option>
                        ))}
                    </select>
                </div>

                {/* Weight */}
                <div className="mb-5">
                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                    <select
                        name="weight"
                        id="weight"
                        value={biodata.weight}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Weight</option>
                        {weights.map(weight => (
                            <option key={weight} value={weight}>{weight} kg</option>
                        ))}
                    </select>
                </div>

                {/* Age */}
                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input
                        name="age"
                        type="number"
                        id="age"
                        value={biodata.age}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                        min="18"
                        max="100"
                    />
                </div>

                {/* Occupation */}
                <div className="mb-5">
                    <label htmlFor="occupation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={biodata.occupation}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Occupation</option>
                        {occupations.map(occ => (
                            <option key={occ} value={occ}>{occ}</option>
                        ))}
                    </select>
                </div>

                {/* Race */}
                <div className="mb-5">
                    <label htmlFor="race" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Race (Skin Color)</label>
                    <select
                        name="race"
                        id="race"
                        value={biodata.race}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Race</option>
                        {races.map(race => (
                            <option key={race} value={race}>{race}</option>
                        ))}
                    </select>
                </div>

                {/* Father's Name */}
                <div className="mb-5">
                    <label htmlFor="fathersName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
                    <input
                        name="fathersName"
                        type="text"
                        id="fathersName"
                        value={biodata.fathersName}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    />
                </div>

                {/* Mother's Name */}
                <div className="mb-5">
                    <label htmlFor="mothersName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Name</label>
                    <input
                        name="mothersName"
                        type="text"
                        id="mothersName"
                        value={biodata.mothersName}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    />
                </div>

                {/* Permanent Division */}
                <div className="mb-5">
                    <label htmlFor="permanentDivision" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Division</label>
                    <select
                        name="permanentDivision"
                        id="permanentDivision"
                        value={biodata.permanentDivision}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Division</option>
                        {divisions.map(div => (
                            <option key={div} value={div}>{div}</option>
                        ))}
                    </select>
                </div>

                {/* Present Division */}
                <div className="mb-5">
                    <label htmlFor="presentDivision" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Present Division</label>
                    <select
                        name="presentDivision"
                        id="presentDivision"
                        value={biodata.presentDivision}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Division</option>
                        {divisions.map(div => (
                            <option key={div} value={div}>{div}</option>
                        ))}
                    </select>
                </div>

                {/* Expected Partner Age */}
                <div className="mb-5">
                    <label htmlFor="expectedPartnerAge" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Age</label>
                    <input
                        name="expectedPartnerAge"
                        type="text"
                        id="expectedPartnerAge"
                        value={biodata.expectedPartnerAge}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="e.g. 25-30"
                        required
                    />
                </div>

                {/* Expected Partner Height */}
                <div className="mb-5">
                    <label htmlFor="expectedPartnerHeight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Height (cm)</label>
                    <select
                        name="expectedPartnerHeight"
                        id="expectedPartnerHeight"
                        value={biodata.expectedPartnerHeight}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Height</option>
                        {heights.map(height => (
                            <option key={height} value={height}>{height} cm</option>
                        ))}
                    </select>
                </div>

                {/* Expected Partner Weight */}
                <div className="mb-5">
                    <label htmlFor="expectedPartnerWeight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Partner Weight (kg)</label>
                    <select
                        name="expectedPartnerWeight"
                        id="expectedPartnerWeight"
                        value={biodata.expectedPartnerWeight}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        required
                    >
                        <option value="">Select Weight</option>
                        {weights.map(weight => (
                            <option key={weight} value={weight}>{weight} kg</option>
                        ))}
                    </select>
                </div>

                {/* Contact Email */}
                <div className="mb-5">
                    <label htmlFor="contactEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Email</label>
                    <input
                        name="contactEmail"
                        type="email"
                        id="contactEmail"
                        value={biodata.contactEmail}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light cursor-not-allowed"
                        readOnly
                    />
                </div>

                {/* Mobile Number */}
                <div className="mb-5">
                    <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                    <input
                        name="mobileNumber"
                        type="tel"
                        id="mobileNumber"
                        value={biodata.mobileNumber}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="+8801XXXXXXXXX"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                >
                    Save & Publish Now
                </button>
            </form>
        </div>
    );
};

export default EditBiodata;