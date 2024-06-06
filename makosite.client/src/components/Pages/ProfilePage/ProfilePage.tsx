import {FC} from 'react';
import {useParams} from "react-router-dom";

const ProfilePage : FC = () => {
    const { username } = useParams();

    return (
        <div>
            Profile {username}
        </div>
    );
};

export {ProfilePage};