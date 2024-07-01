import {FC, useEffect, useState} from 'react';
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
        setError,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = async (data: any) => {
        await authService.login(data).then((res) => {
            dispatch(loginUser({token: res.token, user: res.user}));
            navigate('/');
        }).catch(e => {
            if (e.response?.data?.message) {
                setError("password", {
                    type: "custom",
                    message: e.response.data.message,
                })
            } else {
                setError("password", {
                    type: "custom",
                    message: e.message,
                })
            }
        });
    }

    return (
        <div>
            <div className={css.loginForm}>
                <div className={css.loginLogo}>
                    <Logo fontSize={40} firstPartOfLogo={'Kind'} secondPartOfLogo={'\nFund'}/>
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
                        {errors.EmailOrPhoneNumber && <span className="formError">This field is required</span>}
                    </div>
                    <div className={css.inputGroup}>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder={"your password"}/>
                        {errors.password && <span className="formError">{errors.password.message?.toString()}</span>}
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