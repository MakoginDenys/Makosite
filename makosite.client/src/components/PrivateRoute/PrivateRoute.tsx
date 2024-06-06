import {FC} from "react";
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';


const PrivateRoute : FC = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export {PrivateRoute};