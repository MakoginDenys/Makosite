import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './ProfilePage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faFacebook,
    faInstagram,
    faTelegram,
    faTwitch,
    faXTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {useAppSelector} from "../../../hooks/hooks.ts";
import defaultAvatar from "../../../assets/images/avatars/Avatar.png";

const ProfilePage : FC = () => {
    const user = useAppSelector(state => state.search.selectedUser);

    return (
        <div className={css.profileContainer}>
            <div className={css.profileCard}>
                <strong>{user?.userName}</strong>
                {
                    user?.photo == '' ?
                        <img src={defaultAvatar} alt="user photo"/> :
                        <img src={user?.photo} alt="user photo"/>
                }
            </div>

            <div className={css.profileTabs}>
                <div className={css.tabTitles}>
                    <NavLink to={`/u/${user?.userName}/about`}>About</NavLink>
                    <NavLink end to={`/u/${user?.userName}`}>Donate</NavLink>
                    <div className={css.verticalLine}></div>
                </div>
                <Outlet/>
                <div className={css.mediaBlock}>
                    <a href="https://twitter.com/?lang=en" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faXTwitter}/>
                    </a>
                    <a href="https://www.instagram.com/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faInstagram}/>
                    </a>
                    <a href="https://www.youtube.com/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faYoutube}/>
                    </a>
                    <a href="https://discord.com/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faDiscord}/>
                    </a>
                    <a href="https://web.telegram.org/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faTelegram}/>
                    </a>
                    <a href="https://www.twitch.tv/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faTwitch}/>
                    </a>
                    <a href="https://www.facebook.com/" target={'_blank'}>
                        <FontAwesomeIcon size={'lg'} icon={faFacebook}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export {ProfilePage};