import React, {FC, useState} from 'react';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropdownProfile : FC = () => {
    const [user, setUser] = useState(1)

    return (
        <div>
            {
                user != null ? <img src="" alt="user photo"/> : <FontAwesomeIcon icon={faUser} />
            }
        </div>
    );
};

export {DropdownProfile};