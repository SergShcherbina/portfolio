import React from 'react';
import styles from "./Main.module.scss"
import styleContainer from '../common/styles/container.module.scss'
import avatar from '../assets/img/avatar.png'
import {IconDowload} from "../assets/icons/IconDowload";
import {sectionIdName} from "../common/variableReact/sectionIdName";


export const Main = () => {
    return (
        <div id={sectionIdName.main} className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.wrapper}>
                    <div className={styles.sircle}>
                        <div className={styles.wrapperPhoto}>
                            <img className={styles.photo} src={avatar}/>
                        </div>
                    </div>
                    <div className={styles.wrapperDescription}>
                        <p className={styles.greetings}> 👋 Привет! Меня зовут </p>
                        <h1 className={styles.title} >Сергей </h1>
                        <p className={styles.subTitle}> я front-end разработчик </p>
                        <button className={styles.button}> Cкачать cv <p className={styles.dowload}><IconDowload/></p> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

