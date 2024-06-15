import React, {FC, useState} from 'react';
import $ from 'jquery';
import css from './DonateTab.module.css';
import {useForm} from "react-hook-form";
import TopFive from "./TopFive/TopFive.tsx";

const DonateTab : FC = () => {
    const [
        activePrice,
        setActivePrice
    ] = useState<EventTarget>(new EventTarget());
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = () => {

    }

    const onPresetClick = (e: React.MouseEvent<HTMLSpanElement>, amount: number) => {
        $(activePrice).removeClass(css.pricePresetActive);
        setActivePrice(e.target);
        $('#inputAmount').val(amount);
        $(e.target).addClass(css.pricePresetActive);
    }

    return (
        <div className={css.donateTab}>
            <div className={css.donateBlock}>
                <h3>Donate</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.inputTitle}>Payment method</div>
                    <div>
                        <div className={css.inputRadio}>
                            <input id={'radioMono'} {...register('mono')} name="paymentMethod" type="radio" defaultChecked/>
                            <label htmlFor="radioMono">Mono</label>
                        </div>
                        <div className={css.inputRadio}>
                            <input id={'radioCrypto'} {...register('crypto')} name="paymentMethod" type="radio" disabled/>
                            <label htmlFor="radioCrypto">Cryptocurrency</label>
                        </div>
                    </div>
                    <div className={css.inputTitle}>Amount</div>
                    <div className={css.amountBlock}>
                        <input id={'inputAmount'} {...register('amount')} type="number"/>
                        <div className={css.inputCurrency}>
                            <span>₴ UAH</span>
                        </div>
                        <div>
                            <span onClick={(e) =>onPresetClick(e,30)} className={css.pricePreset}>30</span>
                            <span onClick={(e) =>onPresetClick(e,50)} className={css.pricePreset}>50</span>
                            <span onClick={(e) =>onPresetClick(e,100)} className={css.pricePreset}>100</span>
                            <span onClick={(e) =>onPresetClick(e,200)} className={css.pricePreset}>200</span>
                            <span onClick={(e) =>onPresetClick(e,500)} className={css.pricePreset}>500</span>
                        </div>
                    </div>
                    <div className={css.amountDescription}>Amount from 1 to 29999 ₴</div>
                    <div>
                        <div className={css.inputTitle}>Full name</div>
                        <input
                            className={css.fullnameInput}
                            {...register('fullName')}
                            type="text"
                            placeholder={'your full name'}
                        />
                    </div>
                    <div>
                        <div className={css.inputTitle}>Message</div>
                        <textarea className={css.textareaInput} placeholder={'Leave your message here'}></textarea>
                    </div>
                    <button className={css.sendButton} type={'submit'}>Send</button>
                </form>
            </div>
            <div className={css.rightPanel}>
                <TopFive title={"Top 5"}/>
                <TopFive title={"Latest 5"}/>
            </div>
        </div>
    );
};

export default DonateTab;