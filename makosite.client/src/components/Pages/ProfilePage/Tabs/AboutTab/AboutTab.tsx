import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../../hooks/hooks.ts";
import css from './AboutTab.module.css';

const AboutTab : FC = () => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <div>
            <div>
                <div className={css.aboutBlock}>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                        error molestias natus obcaecati quia quidem quis recusandae soluta veritatis voluptatum.
                    </p>
                </div>

                <div className={css.donateBlock}>
                    <Link to={`/${user?.username}`}>DONATE</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutTab;