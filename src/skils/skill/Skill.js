import React from 'react';
import style from '../skill/Skill.module.css';

export const Skill = (props) => {
    return (

            <div className={style.skill} >
                <img className={style.img} src={props.img}/>
                <h3 className={style.titleSkill}>
                    {props.mySkill}
                </h3>
                <div >
                    lorem lorem lorem lorem lorem lorem
                    lorem lorem loreml orem lorem lorem lorem
                </div>

        </div>
    );
};
