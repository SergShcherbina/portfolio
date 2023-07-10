import React from 'react';
import styles from "./idea.module.scss";
import s from '../common/styles/container.module.scss'
import {Title} from "../common/Components/Title";
import Fade from 'react-reveal/Fade';

export const Idea = () => {
    return (
        <div className={styles.idea}>
            <div className={s.container} >
                <Title text={'Есть идея?'} />
                <Fade>
                    <form className={styles.form}>
                        <div>
                            <h2 className={styles.formTitle}>Есть идея? У меня есть навыки. Давайте объединимся.</h2>
                            <p className={styles.subTitle}>Расскажите о себе и Вашей идее.</p>
                        </div>
                        <div className={styles.wrapperInput}>
                            <label> Ваше имя <input
                                type={"text"}
                                name="firstName"
                                // value={}
                                placeholder={'Ваше имя *'}
                                required={true}
                            />  </label>
                            <label> Ваш email <input
                                type={"email"}
                                name="email"
                                // value={''}
                                required={true}
                                placeholder={'Ваше email *'}
                            /> </label>
                        </div>
                        <label> Тема <input
                            type={'text'}
                            name="theme"
                            // value={''}
                            placeholder={'Тема идеи'}
                        /></label>
                        <label> Ваше сообщение <textarea
                            type={'text'}
                            // value={''}
                            placeholder={'...'}
                        /></label>
                        <button className={styles.button}>Отправить сообщение</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
};

