import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state captured', currentUser)
            setUser(currentUser);

        });
        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;