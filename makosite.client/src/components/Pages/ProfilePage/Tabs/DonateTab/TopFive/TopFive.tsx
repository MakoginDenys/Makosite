import React, {FC} from 'react';
import css from './TopFive.module.css'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ITopFiveProps {
    title: string
}

const topFiveList = [
    {id: 1, username: "Robert Paulson", amount: 100},
    {id: 2, username: "Robert Paulson", amount: 50},
    {id: 3, username: "Robert Paulson", amount: 30},
    {id: 4, username: "Robert Paulson", amount: 200},
    {id: 5, username: "Robert Paulson", amount: 500}
]

const TopFive : FC<ITopFiveProps> = (props) => {
    return (
        <div className={css.topFive}>
            <h4>{props.title}</h4>
            <div className={css.userList}>
                {topFiveList.map(item => <div key={item.id}>
                    <FontAwesomeIcon fill={'red'} size={'lg'} icon={faCircleUser} />
                    <span className={css.username}>{item.username}</span>
                    <span className={css.amount}>{item.amount} ₴</span>
                </div>)}
            </div>
        </div>
    );
};

export default TopFive;