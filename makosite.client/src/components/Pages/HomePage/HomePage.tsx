import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {useForm} from "react-hook-form";
import {userService} from "../../../services/user.service.ts";
import {Link, useNavigate} from "react-router-dom";
import {setSelectedUser} from "../../../storage/slices/searchSlice.ts";
import {faBookOpen, faComments, faGamepad, faMicrophone, faMusic, faPalette} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import css from './HomePage.module.css';

const HomePage : FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = async (data: any) => {
        await userService.getUserByUsername(data.username)
            .then(res => {
                if (res.id != 0) {
                    navigate('/u/' + res.userName);
                    dispatch(setSelectedUser(res));
                } else {
                    navigate('/' + data.username)
                }
            })
            .catch()
    }

    return (
        <div className={css.home}>
            <h2 className={css.homeTitle}>
                Convenient collection of donations for
                content authors
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder={'search username'}
                        {...register('username')}
                    />
                    <button type={'submit'}>Find</button>
                </div>

            </form>
            <div className={css.ourClients}>
                <h2>
                    Our service is used
                    designers, video streamers, bloggers,
                    voice teams, podcasters,
                    musicians and other authors
                </h2>

                <Link to={'/register'}>Create account</Link>
            </div>

            <div className={css.animatedIcons}>
                <FontAwesomeIcon size={'2xl'} icon={faMusic} />
                <FontAwesomeIcon size={'2xl'} icon={faMicrophone} />
                <FontAwesomeIcon size={'2xl'} icon={faComments} />
                <FontAwesomeIcon size={'2xl'} icon={faBookOpen} />
                <FontAwesomeIcon size={'2xl'} icon={faGamepad} />
                <FontAwesomeIcon size={'2xl'} icon={faPalette} />
            </div>

            <div className={css.reviews}>
                <div className={css.review}>

                </div>
                <div className={css.review}>

                </div>
                <div className={css.review}>

                </div>
            </div>

            <div className={css.faq}>
                <h3>Questions and answers</h3>
                <div>
                    <div>
                        <div className={css.faqQuestion}>Question 1</div>
                        <div className={css.faqToggle}>+</div>
                    </div>
                    <div className={css.faqAnswer}>
                        Answer
                    </div>
                </div>
                <div>
                    <div>
                        <div className={css.faqQuestion}>Question 2</div>
                        <div className={css.faqToggle}>+</div>
                    </div>
                    <div className={css.faqAnswer}>
                        Answer
                    </div>
                </div>
                <div>
                    <div>
                        <div className={css.faqQuestion}>Question 3</div>
                        <div className={css.faqToggle}>+</div>
                    </div>
                    <div className={css.faqAnswer}>
                        Answer
                    </div>
                </div>
                <div>
                    <div>
                        <div className={css.faqQuestion}>Question 4</div>
                        <div className={css.faqToggle}>+</div>
                    </div>
                    <div className={css.faqAnswer}>
                        Answer
                    </div>
                </div>
            </div>



            <div className={css.wannaTry}>
                <h2>Wanna try?</h2>
                <p>
                    Register in a few clicks. Create a page now
                    share your content and get support.
                </p>

                <Link to={'/register'}>Create account</Link>
            </div>
        </div>
    );
};

export {HomePage};