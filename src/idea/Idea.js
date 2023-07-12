import React, {useState} from 'react';
import styles from "./idea.module.scss";
import s from '../common/styles/container.module.scss'
import {Title} from "../common/Components/Title";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import {Spinner} from "../assets/icons/Spinner";

export const Idea = () => {
    const [status, setStatus] = useState("idle")

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading')
        emailjs.sendForm('service_qcjr2ut', 'template_b2uacdq', e.target, 'dX6JivBF3e4HTgHoN')
            .then((result) => {
                setStatus('success')
                e.target.reset()
            }, (error) => {
                debugger
                setStatus('error')
                console.log(error)
            }).finally(() => {
            setTimeout(() => {
                setStatus('idle')
            }, 3000)
        })

    }

    return (
        <div  className={styles.idea}>
            <div className={s.container} >
                <Title text={'Есть идея?'} />
                <Fade>
                    <form  className={styles.form} onSubmit={sendEmail}>
                        <div  id={'Idea'} >
                            <h2 className={styles.formTitle}>Есть идея? У меня есть навыки. Давайте объединимся.</h2>
                            <p className={styles.subTitle}>Расскажите о себе и Вашей идее.</p>
                        </div>
                        <div className={styles.wrapperInput}>
                            <label> Ваше имя <input
                                type={"text"}
                                name="firstName"
                                placeholder={'Ваше имя *'}
                                required={true}
                            />  </label>
                            <label> Ваш email <input
                                type={"email"}
                                name="email"
                                required={true}
                                placeholder={'Ваше email *'}
                            /> </label>
                        </div>
                        <label> Тема <input
                            type={'text'}
                            name="theme"
                            placeholder={'Тема идеи'}
                        /></label>
                        <label> Ваше сообщение <textarea
                            name={'textarea'}
                            placeholder={'...'}
                        /></label>
                        <button className={styles.button}>
                            {
                                status === 'idle' ? 'Отправить сообщение' :
                                status === 'loading' ? <Spinner/> :
                                status === 'success' ?  'Сообщение отправлено' : 'что то пошло не так '
                            }</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
};

