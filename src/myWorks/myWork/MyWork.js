import React from 'react';
import style from "./MyWork.module.css"

export const MyWork = () => {
    return (
        <div className={style.wrapperWork} >
            <div className={style.img} >
                <img src={'#'} />
            </div>
            <button>click me</button>
            <h4>
                name project
            </h4>
            <div >  description </div>
        </div>
    );
};

