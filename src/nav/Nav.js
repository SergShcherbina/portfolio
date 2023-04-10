import React from 'react';
import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <ul className={style.nav}>
            <li className={style.item}><a href={'#'}>Главная</a></li>
            <li className={style.item}><a href={'#'}>Скилы</a></li>
            <li className={style.item}><a href={'#'}>Работы</a></li>
            <li className={style.item}><a href={'#'}>Контакты</a></li>
        </ul>
    );
};

