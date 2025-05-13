import React, { useEffect, useState } from 'react';
import SideSearchBar from '../components/SideSearchBar';
import BiodataCard from '../components/BiodataCard';
import Pagination from 'react-js-pagination';

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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch('/biodatas.json')
            .then(res => res.json())
            .then(data => setBiodatas(data));
    }, []);

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
        setCurrentPage(1); // Reset page on filter change
    };

    const filteredBiodatas = biodatas.filter(biodata => {
    const age = parseInt(biodata.age);
    // Extract height number (handles both "5.9ft" and "5.9 ft")
    const height = parseFloat(biodata.height.replace(/\s?ft/, ''));
    
    // Convert biodataType to match filter options
    const biodataTypeForFilter = biodata.biodataType === 'Male' ? 'Groom' : 
                                biodata.biodataType === 'Female' ? 'Bride' : '';
    
    // Convert marital status to match filter options
    const maritalStatusForFilter = biodata.maritalStatus === 'Single' ? 'Unmarried' : 
                                  biodata.maritalStatus;

    return (
        (!filters.biodataType || biodataTypeForFilter === filters.biodataType) &&
        (!filters.maritalStatus || maritalStatusForFilter === filters.maritalStatus) &&
        (!filters.religion || biodata.religion === filters.religion) &&
        (!filters.ageFrom || age >= Number(filters.ageFrom)) &&
        (!filters.ageTo || age <= Number(filters.ageTo)) &&
        (!filters.heightFrom || parseFloat(filters.heightFrom) <= height) &&
        (!filters.heightTo || parseFloat(filters.heightTo) >= height)
    );
});

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBiodatas.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="grid grid-cols-12 gap-6 my-12">
            {/* Sidebar */}
            <div className="col-span-3">
                <SideSearchBar filters={filters} onFilterChange={handleFilterChange} />
            </div>

            {/* Main content (biodata cards) */}
            <div className="col-span-9 h-[490px] pr-2">
                <div className="grid grid-cols-3 gap-6 h-fit">
                    {currentItems.map(biodata => (
                        <BiodataCard key={biodata.biodataId} biodata={biodata} />
                    ))}
                </div>

                {/* Tailwind Styled Pagination */}
                <div className="mt-6 flex justify-center">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={filteredBiodatas.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="mx-1"
                        linkClass="px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded"
                        activeLinkClass="bg-blue-500 text-white border-blue-500"
                        innerClass="flex"
                    />
                </div>
            </div>
        </div>
    );
};

export default Biodatas;
