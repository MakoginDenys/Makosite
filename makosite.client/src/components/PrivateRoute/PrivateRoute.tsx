import {FC} from "react";
import { Outlet, Navigate } from 'react-router-dom';
import {useAppSelector} from "../../hooks/hooks.ts";


const PrivateRoute : FC = () => {
    const token = useAppSelector((state : any) => state.auth.accessToken);

    return token != null ? <Outlet /> : <Navigate to="/login" replace />;
};

export {PrivateRoute};