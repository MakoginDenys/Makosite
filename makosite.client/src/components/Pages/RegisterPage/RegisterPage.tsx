import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form";
import {Logo} from "../../Logo/Logo.tsx";
import cssLogin from "../LoginPage/LoginPage.module.css";

type FormData = {
    email: string,
    phone: string,
    username: string,
    password: string,
    repeatPassword: string
};

const RegisterPage : FC = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<FormData> = (data) => {
        navigate('/login');
        console.log(data)
    }

    return (
        <div>
            <div className={cssLogin.loginForm}>
                <div className={cssLogin.loginLogo}>
                    <Logo fontSize={40} firstPartOfLogo={'Mako'} secondPartOfLogo={'\nSite'}/>
                </div>
                <h3>Sign up</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                            placeholder={"example@gmail.com"}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Phone</label>
                        <input
                            type="text"
                            {...register("phone", { required: true })}
                            placeholder={"098 777 43 21"}
                        />
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Username</label>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            placeholder={"cool_username"}
                        />
                        {errors.username && <span>This field is required</span>}
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder={"your password"}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className={cssLogin.inputGroup}>
                        <label htmlFor="">Repeat password</label>
                        <input
                            type="password"
                            {...register("repeatPassword", { required: true })}
                            placeholder={"your password"}
                        />
                        {errors.repeatPassword && <span>This field is required</span>}
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