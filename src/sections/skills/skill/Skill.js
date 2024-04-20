import React from "react";
import {Icon} from "../../../Components";
import styles from "./skill.module.scss";

export const Skill = ({title, description, iconId}) => {
    return (
        <li className={styles.skill}>
            <Icon iconId={iconId}/>
            <article>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}> {description}</p>
            </article>
        </li>
    )
}