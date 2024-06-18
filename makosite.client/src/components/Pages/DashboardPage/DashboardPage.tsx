import {FC} from 'react';
import {Link, Outlet} from "react-router-dom";
import css from './DashboardPage.module.css';
import {faGears, faHouse, faSquarePollVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DashboardPage : FC = () => {

    return (
        <div className={css.dashboard}>
            <div className={css.dashboardLeft}>
                <div className={css.dashboardLinks}>
                    <Link to={'overview'}><FontAwesomeIcon size={'lg'} icon={faHouse} />Overview</Link>
                    <Link to={'statistics'}><FontAwesomeIcon size={'lg'} icon={faSquarePollVertical} />Statistics</Link>
                    <Link to={'settings'}><FontAwesomeIcon size={'lg'} icon={faGears} />Settings</Link>
                </div>
            </div>
            <div className={css.dashboardContent}>
                <Outlet/>
            </div>
        </div>
    );
};

export {DashboardPage};