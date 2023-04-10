import React from 'react';
import style from "./MyWorks.module.css"
import styles from '../common/styles/Styles.module.css'
import {MyWork} from "./myWork/MyWork";

export const MyWorks = () => {
    return (
        <div className={style.works}>
            <div className={styles.container}>
                <h2 className={styles.title} >Мои работы</h2>
                <div className={style.wrapper}>
                    <MyWork/>
                    <MyWork/>
                </div>
            </div>
        </div>
    );
};

