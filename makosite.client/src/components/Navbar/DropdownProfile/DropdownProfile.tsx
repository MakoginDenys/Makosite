import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {
    faAddressCard,
    faArrowRightFromBracket,
    faCaretDown,
    faCaretUp,
    faGear,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import css from './DropdownProfile.module.css'
import {logoutUser} from "../../../storage/slices/authSlice.ts";
import defaultAvatar from '../../../assets/images/avatars/Avatar.png';
import {setSelectedUser} from "../../../storage/slices/searchSlice.ts";

const DropdownProfile : FC = () => {
    const {user, } = useAppSelector(state => state.auth);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div onClick={() => setShowDropdown(!showDropdown)} className={css.dropdown}>
            <div className={css.dropdownAvatar}>
                {
                    user?.photo == '' ?
                        <img src={defaultAvatar} alt="user photo"/> :
                        <img src={user?.photo} alt="user photo"/>
                }
            </div>
            <span className={css.username}>{user?.userName}</span>
            {
                showDropdown ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />
            }
            {
                showDropdown &&
                <div className={css.dropdownPanel}>
                    <ul>
                        <li>
                            <FontAwesomeIcon className={css.dropdownItemIcon} size={'lg'} icon={faAddressCard}/>
                            <Link onClick={() => dispatch(setSelectedUser(user))} to={`/u/${user?.userName}`}>My profile</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={css.dropdownItemIcon} size={'lg'} icon={faGear}/>
                            <Link to={`/dashboard/settings`}>Settings</Link>
                        </li>
                        <li onClick={handleLogout}>
                            <FontAwesomeIcon className={css.dropdownItemIcon} size={'lg'} icon={faArrowRightFromBracket} />
                            <Link to={'/'}>Sign out</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export {DropdownProfile};