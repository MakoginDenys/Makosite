import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo.tsx";
import css from "./Navbar.module.css";
import {DropdownProfile} from "./DropdownProfile/DropdownProfile.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";

const Navbar : FC = () => {
    const token = useAppSelector(state => state.auth.accessToken);

    return (
        <div className={css.navbar}>
            <Link to="/">
                <Logo fontSize={40} firstPartOfLogo={"Kind"} secondPartOfLogo={"Fund"}/>
            </Link>

            {token != null ? <DropdownProfile /> : <Link  to="/login">SIGN IN</Link>}
        </div>
    );
};

export {Navbar};