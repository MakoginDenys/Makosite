import React, {FC} from 'react';
import {Logo} from "../Logo/Logo.tsx";
import css from './Footer.module.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDiscord, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer : FC = () => {
    return (
        <div className={css.footer}>
            <div className={css.flexContainer}>
                <Logo fontSize={50} firstPartOfLogo={"Kind"} secondPartOfLogo={"Fund"} />

                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                    <li><Link to={'/terms'}>Terms</Link></li>
                    <li><Link to={'/privacy-policy'}>Privacy policy</Link></li>
                </ul>

                <div className={css.footerMedia}>
                    <a href="https://www.figma.com/design/oddbpepKagAU9WOg11Bqwx/Makosite?node-id=0-1&t=OTTVh6DygczKhv51-1"><FontAwesomeIcon size={'2x'} icon={faFigma} /></a>
                    <a href="https://discord.com/"><FontAwesomeIcon size={'2x'} icon={faDiscord} /></a>
                    <a href="https://github.com/MakoginDenys/Makosite"><FontAwesomeIcon size={'2x'} icon={faGithub} /></a>
                </div>
            </div>

            <div className={[css.flexContainer, css.footerAuthor].join(' ')}>
                <span>© 2024 Ukrainian donation platform</span>
                <span>Developed by Vasyl Hryniuk and Denys Makogin</span>
            </div>
        </div>
    );
};

export {Footer};