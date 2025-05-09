import React, { useEffect, useState } from 'react';
import SideSearchBar from '../components/SideSearchBar';
import BiodataCard from '../components/BiodataCard';

const Biodatas = () => {
    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        fetch('/premium-members.json')
            .then(res => res.json())
            .then(data => setBiodatas(data))
    }, [])
   
    return (
        <div className='grid grid-cols-12 gap-6 my-12'>
            <div className='col-span-3'>
                <SideSearchBar />
            </div>
            <div className='col-span-9 grid grid-cols-3 gap-6'>
                {biodatas.map(biodata => <BiodataCard key={biodata.biodataId} biodata={biodata} />)}
            </div>
        </div>
    );
};

export default Biodatas;