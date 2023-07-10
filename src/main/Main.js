import React, {useCallback} from 'react';
import styles from "./Main.module.scss"
import styleContainer from '../common/styles/container.module.scss'
import avatar from '../assets/img/avatar.png'
import {IconDownload} from "../assets/icons/IconDownload";
import {sectionIdName} from "../common/variableReact/sectionIdName";
import logoReact from '../assets/img/logoReact.png'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    return (
        <div id={sectionIdName.main} className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <Fade>
                    <div className={styles.wrapper}>
                        <div className={styles.circle}>
                            <div className={styles.wrapperPhoto}>
                                <img className={styles.photo} src={avatar}/>
                            </div>
                        </div>
                        <div className={styles.wrapperDescription}>
                            <p className={styles.greetings}> 👋 Привет! Меня зовут </p>
                            <div className={styles.wrapperTitle}>
                                <h1 className={styles.title}>Сергей </h1>
                                <img src={logoReact} className={styles.logoReact}/>
                            </div>
                            <div className={styles.subTitle}>
                                <ReactTypingEffect
                                text={'я front-end разработчик'}
                                speed={100}
                                />
                            </div>
                            <a className={styles.button} > Cкачать CV <p className={styles.download}><IconDownload/></p>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}



