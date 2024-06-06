import React, {FC} from 'react';

import css from './Logo.module.css';

interface ILogoProps {
    firstPartOfLogo: string;
    secondPartOfLogo: string;
    fontSize: number;
}

const Logo : FC<ILogoProps> = (props) => {
    return (
        <div className={css.logo} style={{fontSize: props.fontSize}}>
            {props.firstPartOfLogo}<span className={css.secondPartOfLogo}>{props.secondPartOfLogo}</span>
        </div>
    );
};

export {Logo};