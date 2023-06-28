import React from 'react';
import styles from "./contact.module.scss";

export const Contact = ({icon, title, link}) => {
    return (
        <li className={styles.item}>
            <div className={styles.wrapperConnect}>
                <a className={styles.link} src={link}>
                    {icon}
                </a>
                <p className={styles.descr}>{title}</p>
            </div>
        </li>
    );
};
