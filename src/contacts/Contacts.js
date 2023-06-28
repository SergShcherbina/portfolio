import React from 'react';
import styles from "./contacts.module.scss";
import s from '../common/styles/container.module.scss'
import {Title} from "../common/Components/Title";
import zhdun from "../assets/img/zhdun.jpeg";
import {Contact} from "./contact/Contact";
import {IconZoom} from "../assets/icons/IconZoom";
import {IconTelegram} from "../assets/icons/iconTelegram";
import {IconEmail} from "../assets/icons/IconEmail";

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={s.container} >
                <Title text={'Контакты'} />
                <div className={styles.wrapperList}>
                    <ul className={styles.listItem}>
                        <Contact icon={<IconTelegram/>} title={'Telegram'} link={'#'}/>
                        <Contact icon={<IconZoom/>} title={'Zoom'} link={'#'}/>
                        <Contact icon={<IconEmail/>} title={'E-mail'} link={'#'}/>
                    </ul>
                    <div className={styles.image}>
                        <img src={zhdun}  alt={'zhdun'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

