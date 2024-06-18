import React, {FC} from 'react';
import css from './Settings.module.css';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {imageToBase64} from "../../../helpers/imageHelper.ts";
import defaultAvatar from "../../../assets/images/avatars/Avatar.png"
import {userService} from "../../../services/user.service.ts";
import {setLoginUser} from "../../../storage/slices/authSlice.ts";

const SettingsPage : FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            ...user
        }
    });

    const onSubmit = async (data: any) => {
        document.body.style.cursor = "wait";
        await userService.updateUser(data).then(res => {
            dispatch(setLoginUser(res.user))
        }).catch(e => {
            if (e.response?.data?.message) {
                setError("root.server", {
                    type: "custom",
                    message: e.response.data.message,
                })
            } else {
                setError("root.server", {
                    type: "custom",
                    message: e.message,
                })
            }
        }).finally(() => document.body.style.cursor = "default")
    }

    return (
        <div className={css.settings}>
            <h2>Settings</h2>
            <div className={css.settingsContainer}>
                <form className={css.settingsFrom} onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.formRow}>
                        <div>
                            <img
                                id={'settingsImg'}
                                src={user?.photo == '' || user?.photo == null ? defaultAvatar : user?.photo}
                                alt="profile photo"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Username</label>
                            <input
                                type="text"
                                {...register('userName')}
                                defaultValue={user?.userName}
                            />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                {...register('email')}
                                defaultValue={user?.email}
                                disabled
                            />
                        </div>
                    </div>

                    <div className={css.formRow}>
                        <div>
                            <label className={css.customFileUpload} htmlFor="file-upload">Upload photo</label>
                            <input
                                id="file-upload"
                                type="file"
                                accept=".png,.jpeg,.jpg"
                                style={{display: "none"}}
                                {...register('photo')}
                                onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                                    const element = event.target as HTMLInputElement
                                    element.value = ''
                                }}
                                onChange={async (e) => {
                                    const res: any = await imageToBase64(e.target.files?.[0]);
                                    (document.getElementById('settingsImg') as HTMLImageElement).src = res.toString();
                                    setValue('photo', res);
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor="">Phone</label>
                            <input
                                type="text"
                                {...register('phoneNumber', {
                                    required: true,
                                    maxLength: 10,
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: 'invalid regex'
                                    }
                                })}
                                defaultValue={user?.phoneNumber}
                            />
                        </div>

                        <div>
                            <label htmlFor="">Role (streamer, youtuber... etc.)</label>
                            <input
                                type="text"
                                {...register('about')}
                                defaultValue={user?.about}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            {...register('description')}
                            defaultValue={user?.description}
                        ></textarea>
                    </div>
                    {errors.root?.server && <span className="formError">{errors.root?.server.message?.toString()}</span>}
                    {errors.phoneNumber && <span className="formError">{errors.phoneNumber.message?.toString()}</span>}

                    <button type={'submit'}>Save</button>
                </form>
            </div>
        </div>
    );
};

export {SettingsPage} ;