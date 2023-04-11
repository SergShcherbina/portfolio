import React from 'react';
import style from "./MyWork.module.css"

export const MyWork = (props) => {
    return (
        <div className={style.wrapperWork} >
            <div className={style.img} >
                <img src={props.src} />
            </div>
            <button><a href={props.href}>click me</a></button>
            <h4>
                {props.name}
            </h4>
            <div className={style.description}>  {props.desr} </div>
        </div>
    );
};

