import React from 'react';
import style from "./Skills.module.css"
import styles from '../common/styles/Styles.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={styles.container}>
                <h2 className={styles.title}> Moи скиллы </h2>
                <div className={style.wrapper}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

