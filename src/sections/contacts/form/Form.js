import React, { useEffect, useState } from 'react'
import { Progress } from '../../../constans/status'
import { getButtonContent } from '../../../helpers/getButtonContent'
import { sendEmail } from '../../../helpers/sendEmail'
import styles from './form.module.scss'

export const Form = () => {
    const [status, setStatus] = useState(Progress.IDLE)
    const [timerId, setTimerId] = useState(null)

    const sendEmailHandler = (e) => {
        void sendEmail(e, setStatus, setTimerId)
    }

    useEffect(() => {
        return clearTimeout(timerId)
    }, [timerId])

    return (
        <form className={styles.form} onSubmit={sendEmailHandler}>
            <div id={'Idea'}>
                <h2 className={styles.formTitle}>
                    Есть идея? У меня есть навыки. Давайте объединимся.
                </h2>
                <p className={styles.subTitle}>
                    Расскажите о себе и Вашей идее.
                </p>
            </div>

            <div className={styles.wrapperInput}>
                <label>
                    Ваше имя
                    <input
                        type={'text'}
                        name="firstName"
                        placeholder={'Ваше имя *'}
                        required={true}
                    />
                </label>
                <label>
                    Ваш email
                    <input
                        type={'email'}
                        name="email"
                        required={true}
                        placeholder={'Ваше email *'}
                    />
                </label>
            </div>

            <label>
                Тема
                <input type={'text'} name="theme" placeholder={'Тема идеи'} />
            </label>

            <label>
                Ваше сообщение
                <textarea name={'textarea'} placeholder={'...'} />
            </label>

            <button className={styles.button}>
                {getButtonContent(status)}
            </button>
        </form>
    )
}
