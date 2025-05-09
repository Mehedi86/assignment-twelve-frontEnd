import React from 'react';
import { FaStar } from 'react-icons/fa';

const SuccessStoryCard = ({ successStory }) => {
    const { story, reviewStar, marriageDate } = successStory;
    return (
        <div className="h-[400px] bg-[url('/couple.jpg')] bg-center bg-black/50 bg-blend-overlay text-white p-4 my-6 rounded shadow-lg">
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
                {/* Top - Rating */}
                <div className="flex items-center gap-1 text-yellow-400 text-3xl">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < reviewStar ? 'text-yellow-400' : 'text-gray-500'}
                        />
                    ))}
                </div>

                {/* Middle - Story */}
                <p className="text-lg font-light leading-relaxed mt-4 line-clamp-5">
                    {story}
                </p>

                {/* Bottom - Marriage Date */}
                <p className="mt-auto text-sm text-gray-300">
                    Married on <span className="font-semibold">{marriageDate}</span>
                </p>
            </div>

        </div>
    );
};

export default SuccessStoryCard;