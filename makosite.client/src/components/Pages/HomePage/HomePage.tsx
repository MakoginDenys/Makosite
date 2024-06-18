import {FC} from 'react';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {useForm} from "react-hook-form";
import {userService} from "../../../services/user.service.ts";
import {Link, useNavigate} from "react-router-dom";
import {setSelectedUser} from "../../../storage/slices/searchSlice.ts";
import {
    faBookOpen, faCommentDots,
    faComments,
    faGamepad,
    faMagnifyingGlass,
    faMicrophone,
    faMusic,
    faPalette, faQuestion, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import css from './HomePage.module.css';
import {faDiscord} from "@fortawesome/free-brands-svg-icons";


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

    const toggleHide = (e: any) => {
        const transform = e.target.style.transform;
        if(transform == '') {
            e.target.style.transform = 'rotate(45deg)';
        } else e.target.style.transform = '';
        e.target.parentElement.parentElement
            .querySelector('.answer').classList.toggle('faqAnswerHide');
    }

    return (
        <div className={css.home}>
            <div className={css.searchContainer}>
                <h2 className={css.homeTitle}>
                    Convenient collection of donations for
                    content authors
                </h2>
                <form id={'searchForm'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.searchForm}>
                        <input
                            type="text"
                            placeholder={'search author'}
                            {...register('username', {required: true})}
                        />
                        <button type={'submit'}>
                            <FontAwesomeIcon size={'xl'} className={css.searchButton} icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </form>

                <div className={css.shapeDivider}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className={css.trust}>
                <h2>They trust us</h2>

                <div className={css.trustFlex}>
                    <div className={css.trustItem}>
                        <FontAwesomeIcon className={css.trustItemIcon} fill={'white'} size={'3x'} icon={faUsers} />
                        <span className={css.trustItemTitle}>Users</span>
                        <span className={css.trustItemCount}>11821+</span>
                    </div>
                    <div  className={css.trustItem}>
                        <FontAwesomeIcon className={css.trustItemIcon} fill={'white'} size={'3x'} icon={faCommentDots} />
                        <span className={css.trustItemTitle}>Reviews</span>
                        <span className={css.trustItemCount}>136+</span>
                    </div>
                    <div  className={css.trustItem}>
                        <FontAwesomeIcon className={css.trustItemIcon} fill={'white'} size={'3x'} icon={faDiscord} />
                        <span className={css.trustItemTitle}>Discord subscribers</span>
                        <span className={css.trustItemCount}>543+</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="custom-shape-divider-bottom-1718637215">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className={css.ourClients}>
                <h2>
                    Our service is used
                    designers, video streamers, bloggers,
                    voice teams, podcasters,
                    musicians and other authors
                </h2>

                <Link className={css.ourClientsButton} to={'/register'}>Create account</Link>
            </div>
            <div className={css.animatedIcons}>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faMusic}/></div>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faMicrophone}/></div>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faComments}/></div>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faBookOpen}/></div>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faGamepad}/></div>
                <div className={css.animatedIcon}><FontAwesomeIcon size={'2xl'} icon={faPalette}/></div>
            </div>

            <div className={css.reviews}>
                <h2>Reviews</h2>

                <div className={css.reviewsFlex}>
                    <div className={css.review}>
                        <img src="/src/assets/images/avatars/ggrinyuk.png" alt="photo"/>
                        <span>@ggrinyuk</span>
                        <p className={css.reviewText}>
                            The easiest and most pleasant to use donation service
                            (in my experience) with a lot of functionality.
                        </p>
                    </div>
                    <div className={css.review}>
                        <img src="/src/assets/images/avatars/yarolidze.png" alt="photo"/>
                        <span>@yarolidze</span>
                        <p className={css.reviewText}>
                            Convenient service and interface, high-quality support, the ability to receive donations
                            from all over the world directly to my bank card. This is the best it can be!
                        </p>
                    </div>
                    <div className={css.review}>
                        <img src="/src/assets/images/avatars/flopy.png" alt="photo"/>
                        <span>@flopy</span>
                        <p className={css.reviewText}>
                            Very cool service - they respond quickly, do it without delays,
                            and even when there is a problem, after a few minutes it is no longer a problem 😏
                        </p>
                    </div>
                </div>
            </div>

            <div className={css.faq}>
                <h3>Questions and answers</h3>
                <div className={css.faqItem}>
                    <div className={css.faqHeader}>
                        <div className={css.faqQuestion}>How will donations be sent to me?</div>
                        <div className={css.faqToggle} onClick={toggleHide}>+</div>
                    </div>
                    <div className={`${css.faqAnswer} faqAnswerHide answer`}>
                        Donations in the form of a voluntarily chosen amount will be sent to you from any
                        country in the world, paying by card in any currency. The payment system will
                        withdraw the amount in hryvnias.
                    </div>
                </div>
                <div className={css.faqItem}>
                    <div className={css.faqHeader}>
                        <div className={css.faqQuestion}>How can I withdraw funds?</div>
                        <div className={css.faqToggle} onClick={toggleHide}>+</div>
                    </div>
                    <div className={`${css.faqAnswer} faqAnswerHide answer`}>
                        Specify your Ukrainian card in hryvnias, make a payment request. Receive funds
                        instantly or a few hours after moderation.
                    </div>
                </div>
                <div className={css.faqItem}>
                    <div className={css.faqHeader}>
                        <div className={css.faqQuestion}>How many donations can I receive?</div>
                        <div className={css.faqToggle} onClick={toggleHide}>+</div>
                    </div>
                    <div className={`${css.faqAnswer} faqAnswerHide answer`}>
                        Start monetizing your content. Everything depends on your desire and energy.
                        Many authors receive their first 1K for several streams, some authors periodically
                        have 10-20K per month.
                    </div>
                </div>
                <div className={css.faqItem}>
                    <div className={css.faqHeader}>
                        <div className={css.faqQuestion}>How can I contact you?</div>
                        <div className={css.faqToggle} onClick={toggleHide}>+</div>
                    </div>
                    <div className={`${css.faqAnswer} faqAnswerHide answer`}>
                        Go to the <a href="https://discord.com/">Discord channel</a>.
                        The community and moderators will help you with
                        all questions.
                    </div>
                </div>

                <FontAwesomeIcon className={css.faqIcon} size={'3x'} icon={faQuestion} />
            </div>


            <div className={css.wannaTry}>
                <h2>Wanna try?</h2>
                <p>
                    Register in a few clicks. Create a page now share your
                    <br/>
                     content and get support.
                </p>

                <Link className={css.ourClientsButton} to={'/register'}>Create account</Link>
            </div>
        </div>
    );
};

export {HomePage};