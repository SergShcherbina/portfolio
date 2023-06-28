import React from 'react';
import styles from "./Footer.module.scss";
import {BlueInst} from "../assets/icons/blueInst";
import {BlueTelegram} from "../assets/icons/blueTelegram";
import {BlueEmail} from "../assets/icons/blueEmail";
import {BlueZoom} from "../assets/icons/blueZoom";
import {BlueGitHub} from "../assets/icons/blueGitHub";


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapperFooter}>
                <h6 className={styles.title}>
                    Щербина Сергей
                </h6>
                <ul className={styles.listItem}>
                    <li className={styles.item}>
                        <a className={styles.link} alt={''}>
                            <BlueTelegram/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} alt={''}>
                            <BlueEmail/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} alt={''}>
                            <BlueInst/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} alt={''}>
                            <BlueZoom/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} alt={''}>
                            <BlueGitHub/>
                        </a>
                    </li>
                </ul>
                <p className={styles.rights}> © 2023 Все права защищены </p>
            </div>
        </div>
    )
};

