import React, {FC} from 'react';
import {Logo} from "../Logo/Logo.tsx";
import css from './Footer.module.css';
import {Link} from "react-router-dom";

const Footer : FC = () => {
    return (
        <div className={css.footer}>
            <div className={css.flexContainer}>
                <Logo fontSize={50} firstPartOfLogo={"Mako"} secondPartOfLogo={"Site"} />

                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                    <li><Link to={'/terms'}>Terms</Link></li>
                    <li><Link to={'/privacy-policy'}>Privacy policy</Link></li>
                </ul>

                <div>
                    <a href="#">figma</a>
                    <a href="#">discord</a>
                    <a href="#">github</a>
                </div>
            </div>
        </div>
    );
};

export {Footer};