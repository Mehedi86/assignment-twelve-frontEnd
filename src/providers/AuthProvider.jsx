import React from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const user = true;
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;