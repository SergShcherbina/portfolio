import React, { useEffect, useState } from 'react'
import { Progress } from '../../../constans/status'
import { getButtonContent } from './lib/getButtonContent'
import { sendEmail } from './lib/sendEmail'
import styles from './form.module.scss'
import { inputModel } from './lib/inputModel'
import { initialValues } from './lib/initialValuees'
import { Input } from './components/input/Input'

export const Form = () => {
    const [status, setStatus] = useState(Progress.IDLE)
    const [timerId, setTimerId] = useState(null)
    const [formState, setFormState] = useState(initialValues)

    const onChangeHandler = (e) => {
        const value = e.target.value
        const inputName = e.target.name
        setFormState((prev) => ({
            ...prev,
            [inputName]: { value, touched: prev[inputName].touched },
        }))
    }

    const onTouchedHandler = (e) => {
        const inputName = e.target.name
        setFormState((prev) => ({
            ...prev,
            [inputName]: { value: prev[inputName].value, touched: true },
        }))
    }

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

            {inputModel.map((item) => (
                <Input
                    {...item}
                    key={item.name}
                    item={item}
                    formState={formState}
                    onChange={onChangeHandler}
                    onBlur={onTouchedHandler}
                />
            ))}

            <label className={styles.label}>
                {'Ваше сообщение'}
                <textarea
                    name={'textarea'}
                    placeholder={'...'}
                    onChange={onChangeHandler}
                    className={styles.textarea}
                />
            </label>
            <button className={styles.button}>
                {getButtonContent(status)}
            </button>
        </form>
    )
}
