import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-4 py-10 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Us</h1>
                
                <p className="text-center text-lg mb-10">
                    Have questions, suggestions, or need help? We're here to assist you. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">Your Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Your Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Email</h2>
                            <p>support@matrimonysite.com</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Phone</h2>
                            <p>+880-1234-567890</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Address</h2>
                            <p>123 Marriage Avenue, Dhaka, Bangladesh</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Social</h2>
                            <p>Facebook | Instagram | LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
