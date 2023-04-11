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
                    <Skill mySkill={'JS'} img={'https://cdn-icons-png.flaticon.com/512/919/919828.png'}/>
                    <Skill mySkill={'CSS'} img={'https://cdn-icons-png.flaticon.com/512/919/919826.png'}/>
                    <Skill mySkill={'React'} img={'https://cdn1.iconfinder.com/data/icons/soleicons-line-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png'}/>
                </div>
            </div>
        </div>
    );
};

