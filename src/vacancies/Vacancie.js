import React from 'react';
import style from "./Vacancie.module.css";
import styles from '../common/styles/Styles.module.css'


export const Vacancie = () => {
    return (
        <div className={style.vacancie}>
            <div className={styles.container} >
                <h2 className={styles.title}>
                    Рассматривю вакансии удаленной работы
                </h2>
                <button>click me</button>
            </div>
        </div>
    );
};

