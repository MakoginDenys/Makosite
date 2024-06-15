import {FC} from 'react';
import {useAppSelector} from "../../../hooks/hooks.ts";

const HomePage : FC = () => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <div>
            {user?.userName}  {user?.id}
        </div>
    );
};

export {HomePage};