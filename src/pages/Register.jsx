import React, { useState } from 'react';
import SocialLogin from '../components/SocialLogin';
import useAuthInfo from '../hooks/useAuthInfo';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useAuthInfo();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const photoUrl = e.target.elements.photoUrl.value;
        const password = e.target.elements.password.value;
        const repeatPassword = e.target.elements.repeatPassword.value;
        const terms = e.target.elements.terms.checked;

        if (!terms) {
            alert("You must agree to the terms and conditions");
            return;
        }

        if (password !== repeatPassword) {
            alert("Passwords don't match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);
                // You can also update the user's profile with name and photoUrl here
                // user.updateProfile({ displayName: name, photoURL: photoUrl });
            })
            .catch(error => {
                console.error("Error during registration:", error);
            });

    };

    return (
        <div className="max-w-sm mx-auto py-20">
            <form onSubmit={handleRegister}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input name="name" type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="John Doe" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input name="email" type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL (optional)</label>
                    <input name="photoUrl" type="url" id="photoUrl" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="https://example.com/photo.jpg" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input name="password" type={showPassword ? "text" : "password"} id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input name="repeatPassword" type={showPassword ? "text" : "password"} id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div className="mb-2">
                    <input type="checkbox" id="show-password" onChange={() => setShowPassword(!showPassword)} className="mr-2" />
                    <label htmlFor="show-password" className="text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input name="terms" id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
            <SocialLogin/>
        </div>
    );
};

export default Register;