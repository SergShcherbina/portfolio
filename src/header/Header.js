import React from 'react';
import style from "./Heade.module.css"
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};
