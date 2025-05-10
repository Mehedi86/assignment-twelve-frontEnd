import React, { useEffect, useState } from 'react';
import SideSearchBar from '../components/SideSearchBar';
import BiodataCard from '../components/BiodataCard';

const Biodatas = () => {
    const [biodatas, setBiodatas] = useState([]);
    const [filters, setFilters] = useState({
        biodataType: '',
        maritalStatus: '',
        religion: '',
        ageFrom: '',
        ageTo: '',
        heightFrom: '',
        heightTo: ''
    });

    useEffect(() => {
        fetch('/biodatas.json')
            .then(res => res.json())
            .then(data => setBiodatas(data));
    }, []);

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filteredBiodatas = biodatas.filter(biodata => {
        const age = Number(biodata.age);
        const height = parseFloat(biodata.height);

        return (
            (!filters.biodataType || biodata.biodataType === filters.biodataType) &&
            (!filters.maritalStatus || biodata.maritalStatus === filters.maritalStatus) &&
            (!filters.religion || biodata.religion === filters.religion) &&
            (!filters.ageFrom || age >= Number(filters.ageFrom)) &&
            (!filters.ageTo || age <= Number(filters.ageTo)) &&
            (!filters.heightFrom || parseFloat(filters.heightFrom) <= height) &&
            (!filters.heightTo || parseFloat(filters.heightTo) >= height)
        );
    });

    return (
        <div className="grid grid-cols-12 gap-6 my-12">
            {/* Sidebar */}
            <div className="col-span-3">
                <SideSearchBar filters={filters} onFilterChange={handleFilterChange} />
            </div>

            {/* Main content (biodata cards) */}
            <div className="col-span-9 h-[800px] overflow-y-scroll pr-2">
                <div className="grid grid-cols-3 gap-6 h-fit">
                    {filteredBiodatas.map(biodata => (
                        <BiodataCard key={biodata.biodataId} biodata={biodata} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Biodatas;
