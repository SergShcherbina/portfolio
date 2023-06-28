import React from 'react';
import styles from "./menuItem.module.scss";

export const MenuItem = (props) => {
    return (
        <li className={styles.item } >
            <p className={styles.img}>
                <p>{props.svg}</p>
            </p>
            <a className={styles.link} src={'#'}>{props.name}</a>
        </li >
    );
};

