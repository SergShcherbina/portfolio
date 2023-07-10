import React from 'react';
import styles from "./myWork.module.scss"
import {IconLink} from "../../assets/icons/IconLink";
import Fade from 'react-reveal/Fade';

export const MyWork = (props) => {
    return (
        <Fade>
            <li className={styles.wrapperWork} >
                <div className={styles.img} >
                    <img src={props.src} />
                </div>
                <div className={styles.wrapperContent}>
                    <h6 className={styles.title}> {props.title}</h6>
                    <p className={styles.description}>  {props.desr} </p>
                    <a href={props.href} className={styles.linkWork}> <IconLink/> </a>
                </div>
            </li>
        </Fade>

    );
};

