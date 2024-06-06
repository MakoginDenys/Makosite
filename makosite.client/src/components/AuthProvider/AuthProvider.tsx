import React, { FC, useState} from 'react';
import { AuthContext } from '../../context/authContext';

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [
        isAuthenticated,
        setIsAuthenticated
    ] = useState(false);

    const loginUser = () => {
        // Perform authentication logic
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        // Perform logout logic
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider};
