import React, { useContext } from 'react';
import { AuthContext } from '../pages/context/AuthContext';
import Login from '../pages/Login';

export default function PrivateRoutes(props) {
    const { isAuthenticated,userRole } = useContext(AuthContext);
    const { Components } = props;

    if (!isAuthenticated) {
        return <Login />;
    }

    if ( userRole === 'admin') {
    return <Components />;
    }
    return <h1>Access Denied</h1>;
}
