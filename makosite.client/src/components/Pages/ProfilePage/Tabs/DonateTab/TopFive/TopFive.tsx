import React, {FC} from 'react';
import css from './TopFive.module.css'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ITopFiveProps {
    title: string,
    userList: {id: number, username: string, amount: number}[]
}

const TopFive : FC<ITopFiveProps> = (props) => {
    return (
        <div className={css.topFive}>
            <h4>{props.title}</h4>
            <div className={css.userList}>
                {props.userList.map(item => <div key={item.id}>
                    <FontAwesomeIcon fill={'red'} size={'lg'} icon={faCircleUser} />
                    <span className={css.username}>{item.username}</span>
                    <span className={css.amount}>{item.amount} ₴</span>
                </div>)}
            </div>
        </div>
    );
};

export default TopFive;