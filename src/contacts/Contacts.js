import React from 'react';
import style from "./Contacts.module.css";
import styles from '../common/styles/Styles.module.css'


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={styles.container} >
                <h2 className={styles.title}>
                    Контакты
                </h2>
                <form className={style.form}>
                    <input type={"text"}  name="firstInput" value={111111}/>
                    <input type={'text'} name="InputSecond" value={222222}/>
                    <textarea type={'text'} value={'jksgfkjsdhf'}/>
                    <button>click me</button>
                </form>
            </div>
        </div>
    )
};

