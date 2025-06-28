import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuthInfo();
    const location = useLocation();

    if (loading) {
        return <h1 className='text-center text-2xl font-semibold py-20'>Loading...</h1>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location?.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;