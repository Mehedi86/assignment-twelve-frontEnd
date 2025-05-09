import React, { useEffect, useState } from 'react';
import SuccessStoryCard from './SuccessStoryCard';

const SuccessStory = () => {
    const [successStories, setSuccessStories] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        fetch('/success-story.json')
            .then(res => res.json())
            .then(data => {
                if (status) {
                    setSuccessStories(data)
                }
                else {
                    setSuccessStories(data.slice(0, 3))
                }
            })
    }, [status])

    return (
        <div className='container mx-auto border border-stone-200 rounded p-6 my-12'>
            <h1 className='text-4xl font-semibold text-center py-12'>Success Story</h1>
            <div>
                {
                    successStories.map(successStory => <SuccessStoryCard
                        key={successStory.id}
                        successStory={successStory}
                    />)
                }
            </div>
            <button onClick={() => setStatus(true)} className="mt-3 px-4 py-2 font-semibold bg-[#2a2525] text-white rounded cursor-pointer hover:scale-105">
                Show More
            </button>
        </div>
    );
};

export default SuccessStory;