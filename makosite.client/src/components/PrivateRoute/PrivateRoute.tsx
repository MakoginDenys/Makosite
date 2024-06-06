import {FC} from "react";
import { Outlet, Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";


const PrivateRoute : FC = () => {
    const user = useSelector((state : any) => state.auth.user);

    return user != null ? <Outlet /> : <Navigate to="/login" replace />;
};

export {PrivateRoute};