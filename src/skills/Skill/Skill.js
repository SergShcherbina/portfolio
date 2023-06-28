import styles from "./skill.module.scss";
import React from "react";

export const Skill = ({title, deskr, icon}) => {
    return (
        <li className={styles.skill}>
            <div>
                <p className={styles.icon} >{icon}</p>
            </div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.descr}> {deskr}</p>
            </div>
        </li>
    )
}