import React from 'react';
import style from "./Footer.module.css";
import styles from '../common/styles/Styles.module.css'


export const Footer = () => {
    return (
        <div className={style.contacts}>
            <div className={styles.container} >
                <h2 className={styles.title}>
                    Щербина Сергей
                </h2>
                    <ul className={style.listItem}>
                        <li className={style.item}>1</li>
                        <li className={style.item}>2</li>
                        <li className={style.item}>3</li>
                        <li className={style.item}>4</li>
                    </ul>
                <div>
                    <p>2023 Все права защищены </p>
                </div>
            </div>
        </div>
    )
};

