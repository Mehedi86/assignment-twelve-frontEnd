import React from 'react';

const SideSearchBar = () => {
    const ageOptions = [18,19,20,21,22,23,24,25,26,27,28,29,30]
    const heightOptions = ['4. 0"', '4. 1"', '4. 2"', '4. 3"', '4. 4"', '4. 5"', '4. 6"', '4. 7"', '4. 8"', '4. 9"', '4. 10"', '4. 11"', '5. 0"', '5. 1"', '5. 2"', '5. 3"', '5. 4"', '5. 5"', '5. 6"', '5. 7"', '5. 8"', '5. 9"', '5. 10"', '5. 11"', '6. 0"', '6. 1"', '6. 2"', '6. 3"', '6. 4"'];



    return (
        <div className="w-full mx-auto bg-white p-4 rounded-lg shadow-md text-center">
            {/* Header */}
            <h2 className="text-xl font-semibold text-purple-700 mb-1">Filter Options</h2>
            <p className="text-sm text-gray-600 mb-4">
                You can complete the filter here by selecting the options.
            </p>

            {/* Tabs */}
            <div className="flex justify-center bg-gray-100 rounded mb-4 overflow-hidden">
                <button className="flex-1 py-2 text-sm font-medium text-white bg-neutral-800">
                    Basic Filter
                </button>
            </div>

            {/* Filter Section */}
            <div className="text-left space-y-4">
                <details open className="w-full">
                    <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                        General Info
                    </summary>
                    <div className="space-y-4 mt-2">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Biodata Type</label>
                            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Marital Status</label>
                            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                <option>Unmarried</option>
                                <option>Divorced</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Religion</label>
                            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                <option>Islam</option>
                                <option>Hinduism</option>
                                <option>Christianity</option>
                                <option>Buddhism</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Age</label>
                            <div className="flex gap-2">
                                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                    <option value="">From</option>
                                    {ageOptions.map(age => (
                                        <option key={age} value={age}>{age}</option>
                                    ))}
                                </select>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                    <option value="">To</option>
                                    {ageOptions.map(age => (
                                        <option key={age} value={age}>{age}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Height (ft)</label>
                            <div className="flex gap-2">
                                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                    <option value="">From</option>
                                    {heightOptions.map(h => (
                                        <option key={h} value={h}>{h} ft</option>
                                    ))}
                                </select>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                                    <option value="">To</option>
                                    {heightOptions.map(h => (
                                        <option key={h} value={h}>{h} ft</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default SideSearchBar;
