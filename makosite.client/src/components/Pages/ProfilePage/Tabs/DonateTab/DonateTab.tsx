import React, {FC, useState} from 'react';
import $ from 'jquery';
import css from './DonateTab.module.css';
import {useForm} from "react-hook-form";
import TopFive from "./TopFive/TopFive.tsx";

const topFiveList = [
    {id: 1, username: "Robert Paulson", amount: 100},
    {id: 2, username: "Richard Morris", amount: 50},
    {id: 3, username: "Antonio Ricardo", amount: 30},
    {id: 4, username: "Billy Herrington", amount: 200},
    {id: 5, username: "Michale Jackson", amount: 500}
]

const DonateTab : FC = () => {
    const [
        activePrice,
        setActivePrice
    ] = useState<EventTarget>(new EventTarget());
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = (data: any) => {
        window.open(
            'https://send.monobank.ua/jar/49hJS2Jaed' + '?a=' + data?.amount + '&t=' + data?.message,
            '_blank'
        );
    }

    const onPresetClick = (e: React.MouseEvent<HTMLSpanElement>, amount: number) => {
        $(activePrice).removeClass(css.pricePresetActive);
        setActivePrice(e.target);
        $('#inputAmount').val(amount);
        $(e.target).addClass(css.pricePresetActive);
        setValue('amount', amount);
    }

    return (
        <div className={css.donateTab}>
            <div className={css.donateBlock}>
                <h3>Donate</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.inputTitle}>Payment method</div>
                    <div>
                        <div className={css.inputRadio}>
                            <input id={'radioMono'} {...register('mono')} name="paymentMethod" type="radio"
                                   defaultChecked/>
                            <label htmlFor="radioMono">Mono</label>
                        </div>
                        <div className={css.inputRadio}>
                            <input id={'radioCrypto'} {...register('crypto')} name="paymentMethod" type="radio"
                                   disabled/>
                            <label htmlFor="radioCrypto">Cryptocurrency</label>
                        </div>
                    </div>
                    <div className={css.inputTitle}>Amount</div>
                    <div className={css.amountBlock}>
                        <input id={'inputAmount'} {...register('amount')} type="number" placeholder={'0'}/>
                        <div className={css.inputCurrency}>
                            <span>₴ UAH</span>
                        </div>
                        <div>
                            <span onClick={(e) => onPresetClick(e, 30)} className={css.pricePreset}>30</span>
                            <span onClick={(e) => onPresetClick(e, 50)} className={css.pricePreset}>50</span>
                            <span onClick={(e) => onPresetClick(e, 100)} className={css.pricePreset}>100</span>
                            <span onClick={(e) => onPresetClick(e, 200)} className={css.pricePreset}>200</span>
                            <span onClick={(e) => onPresetClick(e, 500)} className={css.pricePreset}>500</span>
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
                        <textarea
                            className={css.textareaInput}
                            {...register('message')}
                            placeholder={'Leave your message here'}
                        ></textarea>
                    </div>
                    <button className={css.sendButton} type={'submit'}>Send</button>
                </form>
            </div>
            <div className={css.rightPanel}>
                <TopFive title={"Top 5"} userList={topFiveList.slice(0).sort((a, b) => b.amount - a.amount)}/>
                <TopFive title={"Latest 5"} userList={topFiveList}/>
            </div>
        </div>
    );
};

export default DonateTab;