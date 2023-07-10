import React from 'react';
import styles from "./contact.module.scss";

export const Contact = ({icon, title, link}) => {
    return (
        <li className={styles.item}>
            <a className={styles.wrapperConnect}>
                <div className={styles.content} src={link}>
                    {icon}
                    <p className={styles.descr}>{title}</p>
                </div>
            </a>
        </li>
    );
};
