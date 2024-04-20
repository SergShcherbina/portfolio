import React from 'react';
import Fade from 'react-reveal/Fade';
import {Icon} from "../../../../Components";
import styles from "./myWork.module.scss"

export const MyWork = (props) => {
    return (
        <Fade>
            <li className={styles.wrapperWork} >
                <div className={styles.img} >
                    <img src={props.src} alt={props.title}/>
                </div>
                <article className={styles.wrapperContent}>
                    <div>
                        <h6 className={styles.title}> {props.title}</h6>
                        <p className={styles.description}>  {props.desr} </p>
                    </div>
                    <div>
                        <a href={props.linkToProject} target="_blank" rel="noreferrer"> <Icon iconId={"link"}  className={`${styles.linkWork} ${styles.linkProject}`} color={"transparent"} /></a>
                        <a href={props.linkToGithub} target="_blank" rel="noreferrer"> <Icon iconId={"github"} className={styles.linkWork} color={"grey"} /> </a>
                    </div>
                </article>
            </li>
         </Fade>
    );
};

