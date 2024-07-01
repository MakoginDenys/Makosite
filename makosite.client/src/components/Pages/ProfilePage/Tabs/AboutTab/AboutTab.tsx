import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../../hooks/hooks.ts";
import css from './AboutTab.module.css';

const AboutTab : FC = () => {
    const user = useAppSelector(state => state.search.selectedUser);

    return (
        <div>
            <div>
                <div className={css.aboutBlock}>
                    <h3>About</h3>
                    {user?.description ? <p>{user?.description}</p> : <p>The user did not provide a description</p>}
                </div>

                <div className={css.donateBlock}>
                    <Link to={`/u/${user?.userName}`}>DONATE</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutTab;