import React from 'react';

const SideSearchBar = ({ filters, onFilterChange }) => {
    const ageOptions = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const heightOptions = [
        "4.0ft", "4.1ft", "4.2ft", "4.3ft", "4.4ft", "4.5ft", "4.6ft", "4.7ft", "4.8ft", "4.9ft",
        "5.0ft", "5.1ft", "5.2ft", "5.3ft", "5.4ft", "5.5ft", "5.6ft", "5.7ft", "5.8ft", "5.9ft",
        "6.0ft", "6.1ft", "6.2ft", "6.3ft", "6.4ft"
    ];
    const biodataTypeOptions = ["Bride", "Groom"];
    const maritalStatusOptions = ["Unmarried", "Divorced", "Widowed"];

    return (
        <div className="w-full mx-auto bg-white p-4 rounded shadow-md text-center">
            <h2 className="text-xl font-semibold text-purple-700 mb-1">Filter Options</h2>
            <p className="text-sm text-gray-600 mb-4">
                You can complete the filter here by selecting the options.
            </p>

            <div className="text-left space-y-4">
                <details open>
                    <summary className="cursor-pointer font-semibold text-gray-700 mb-2">General Info</summary>
                    <div className="space-y-4 mt-2">

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Biodata Type</label>
                            <select
                                value={filters.biodataType}
                                onChange={e => onFilterChange('biodataType', e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            >
                                <option value="">All</option>
                                {biodataTypeOptions.map(type => (
                                    <option key={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Marital Status</label>
                            <select
                                value={filters.maritalStatus}
                                onChange={e => onFilterChange('maritalStatus', e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            >
                                <option value="">All</option>
                                {maritalStatusOptions.map(status => (
                                    <option key={status}>{status}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Religion</label>
                            <select
                                value={filters.religion}
                                onChange={e => onFilterChange('religion', e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            >
                                <option value="">All</option>
                                <option>Islam</option>
                                <option>Hinduism</option>
                                <option>Christianity</option>
                                <option>Buddhism</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Age</label>
                            <div className="flex gap-2">
                                <select
                                    value={filters.ageFrom}
                                    onChange={e => onFilterChange('ageFrom', e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">From</option>
                                    {ageOptions.map(age => (
                                        <option key={age}>{age}</option>
                                    ))}
                                </select>
                                <select
                                    value={filters.ageTo}
                                    onChange={e => onFilterChange('ageTo', e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">To</option>
                                    {ageOptions.map(age => (
                                        <option key={age}>{age}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Height (ft)</label>
                            <div className="flex gap-2">
                                <select
                                    value={filters.heightFrom}
                                    onChange={e => onFilterChange('heightFrom', e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">From</option>
                                    {heightOptions.map(h => (
                                        <option key={h}>{h}</option>
                                    ))}
                                </select>
                                <select
                                    value={filters.heightTo}
                                    onChange={e => onFilterChange('heightTo', e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">To</option>
                                    {heightOptions.map(h => (
                                        <option key={h}>{h}</option>
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
