import React, {FC, useState} from 'react';
import {faCaretDown, faCaretUp, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppSelector} from "../../../hooks/hooks.ts";

const DropdownProfile : FC = () => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <div>
            {
                user?.photo != null ? <img src="" alt="user photo"/> : <FontAwesomeIcon icon={faUser} />
            }
            {
                user?.username
            }
            <FontAwesomeIcon icon={faCaretDown} />
            <FontAwesomeIcon icon={faCaretUp} />
        </div>
    );
};

export {DropdownProfile};