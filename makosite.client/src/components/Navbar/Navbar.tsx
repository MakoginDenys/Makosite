import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo.tsx";
import css from "./Navbar.module.css";
import {DropdownProfile} from "./DropdownProfile/DropdownProfile.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";

const Navbar : FC = () => {
    const user = useAppSelector(state => state.auth.user);



    return (
        <div className={css.navbar}>
            <Link to="/">
                <Logo fontSize={40} firstPartOfLogo={"Mako"} secondPartOfLogo={"Site"}/>
            </Link>

            {user != null ? <DropdownProfile /> : <Link  to="/login">SIGN IN</Link>}
        </div>
    );
};

export {Navbar};