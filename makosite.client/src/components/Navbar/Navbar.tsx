import React, {FC, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo.tsx";
import css from "./Navbar.module.css";
import {DropdownProfile} from "./DropdownProfile/DropdownProfile.tsx";
import {useSelector} from "react-redux";
import {IAuthState} from "../../models/interfaces/IAuthState.ts";
import {useAppSelector} from "../../hooks/hooks.ts";

const Navbar : FC = () => {
    const user = useAppSelector(state => state.auth.user);

    console.log(user)

    return (
        <div className={css.navbar}>
            <Link to="/">
                <Logo fontSize={40} firstPartOfLogo={"Mako"} secondPartOfLogo={"Site"}/>
            </Link>

            {user != null ? <DropdownProfile /> : <Link  to="/login">SING IN</Link>}
        </div>
    );
};

export {Navbar};