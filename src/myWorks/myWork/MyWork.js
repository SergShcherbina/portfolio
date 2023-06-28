import React from 'react';
import styles from "./myWork.module.scss"
import {IconLink} from "../../assets/icons/IconLink";

export const MyWork = (props) => {
    return (
        <div className={styles.wrapperWork} >
            <div className={styles.img} >
                <img src={props.src} />
            </div>
            <div className={styles.wrapperContent}>
                <h6 className={styles.title}> {props.title}</h6>
                <a href={props.href} className={styles.linkWork}> <IconLink/> </a>
                <p className={styles.description}>  {props.desr} </p>
            </div>
        </div>
    );
};

