import React, {FC, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo.tsx";
import css from "./Navbar.module.css";
import {AuthContext} from "../../context/authContext.ts";
import {IAuthContextProps} from "../../interfaces/IAuthContextProps.ts";
import {DropdownProfile} from "./DropdownProfile/DropdownProfile.tsx";

const Navbar : FC = () => {
    const { isAuthenticated, loginUser, logoutUser } = useContext(AuthContext) as IAuthContextProps;

    console.log(isAuthenticated);

    return (
        <div className={css.navbar}>
            <Link to="/">
                <Logo fontSize={40} firstPartOfLogo={"Mako"} secondPartOfLogo={"Site"}/>
            </Link>

            {isAuthenticated ? <DropdownProfile /> : <Link  to="/login">SING IN</Link>}
        </div>
    );
};

export {Navbar};