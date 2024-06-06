import {useContext} from "react";
import {IAuthContextProps} from "../interfaces/IAuthContextProps.ts";
import {AuthContext} from "../context/authContext.ts";

export const useAuth = () : IAuthContextProps => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};