import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Logo} from "../../Logo/Logo.tsx";
import cssLogin from "../LoginPage/LoginPage.module.css";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {loginUser} from "../../../storage/slices/authSlice.ts";

const RegisterPage : FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(loginUser({token: '', user: {username: 'registered_user'}}))
        navigate('/');
    }

    return (
        <div>
            <div className={cssLogin.loginForm}>
                <div className={cssLogin.loginLogo}>
                    <Logo fontSize={40} firstPartOfLogo={'Mako'} secondPartOfLogo={'\nSite'}/>
                </div>
                <h3>Sign up</h3>
                <form onSubmit={handleSubmit}>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder={"example@gmail.com"}/>
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder={"098 777 43 21"}/>
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder={"cool_username"}/>
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder={"your password"}/>
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Repeat password</label>
                        <input type="password" placeholder={"your password"}/>
                    </div>
                    <button className={cssLogin.submitButton} type={"submit"}>Sign up</button>
                    <div className={cssLogin.createAccountLink}>
                        Already have an account? <Link to={'/login'}>Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export {RegisterPage};