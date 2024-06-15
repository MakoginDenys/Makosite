import {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Logo} from "../../Logo/Logo.tsx";
import css from './LoginPage.module.css';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {loginUser} from "../../../storage/slices/authSlice.ts";
import {authService} from "../../../services/auth.service.ts";

const LoginPage : FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = async (data: any) => {
        await authService.login(data).then((res) => console.log(res))
        dispatch(loginUser({token: '', user: {username: 'login_user'}}));
        navigate('/');
    }

    return (
        <div>
            <div className={css.loginForm}>
                <div className={css.loginLogo}>
                    <Logo fontSize={40} firstPartOfLogo={'Mako'} secondPartOfLogo={'\nSite'}/>
                </div>
                <h3>Sign in</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.inputGroup}>
                        <label htmlFor="">Email or phone number</label>
                        <input
                            type="text"
                            {...register("EmailOrPhoneNumber", { required: true })}
                            placeholder={"example@gmail.com"}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={css.inputGroup}>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder={"your password"}/>
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className={css.rememberGroup}>
                        <input type="checkbox"/>
                        <label htmlFor="">Remember me</label>
                    </div>
                    <button className={css.submitButton} type={"submit"}>Log in</button>
                </form>
                <div className={css.createAccountLink}>
                    Don't have an account? <Link to={'/register'}>Register now</Link>
                </div>
            </div>
        </div>
    );
};

export {LoginPage};