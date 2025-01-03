import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; 
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { loggedin } = useContext(AuthContext);

    return (
        loggedin ? children : <Navigate to="/" />
    );
};

export default PrivateRoute;
