import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-4 md:px-20 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">About MatrimonySite</h1>
                <p className="text-lg leading-relaxed mb-8">
                    Welcome to <strong>MatrimonySite</strong> – your trusted partner in finding the perfect life companion. Our platform is dedicated to helping individuals and families find meaningful connections based on trust, culture, and compatibility.
                </p>

                <h2 className="text-2xl font-semibold mb-4 mt-10">Our Mission</h2>
                <p className="text-base leading-relaxed mb-6">
                    To simplify and modernize the matchmaking process by providing a secure, user-friendly, and culturally respectful environment where individuals can meet and build lasting relationships.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="list-disc text-left list-inside space-y-3 mb-8">
                    <li><strong>Verified Profiles:</strong> We ensure all biodatas go through a verification process.</li>
                    <li><strong>User Privacy:</strong> Contact details are only shared upon mutual approval.</li>
                    <li><strong>Admin Support:</strong> Active moderation ensures safety and respect.</li>
                    <li><strong>Custom Filters:</strong> Search biodatas based on religion, education, location, and more.</li>
                    <li><strong>Modern Dashboard:</strong> Interactive UI for both users and admins.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
                <p className="text-base leading-relaxed">
                    We are a team of passionate developers, relationship counselors, and support agents working together to make your journey toward marriage easier and more meaningful.
                </p>
                <div className='h-[400px] bg-[url(/team.jpg)] bg-black/40 bg-blend-overlay bg-center bg-cover flex items-center justify-center'>
                    
                </div>

                <div className="mt-12">
                    <p className="italic">“A successful marriage requires not only finding the right partner, but also being the right partner.”</p>
                    <p className="mt-2 font-semibold">– The MatrimonySite Team</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
