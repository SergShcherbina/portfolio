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
                    <MyWork name={'MARVEL'}
                            desr={' lorem  lorem  lorem  lorem  lorem  lorem lorem lorem  lorem  lorem  lorem  lorem lorem '}
                            src={'https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png?f=webp&w=256'}
                            href={'#'}/>
                    <MyWork
                        name={"Social"}
                        desr={' lorem  lorem  lorem  lorem  lorem  lorem '}
                        src={'https://cdn-icons-png.flaticon.com/512/102/102390.png'}
                        href={'#'}/>
                </div>
            </div>
        </div>
    );
};

