import React from 'react';
import style from "./Main.module.css"
import styleContainer from '../common/styles/Styles.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <h1 className={style.title} >Привет! <br/> Меня зовут Сергей. <br/> Я front-end разработчик </h1>
                    <img className={style.photo} src={'https://kartinkof.club/uploads/posts/2022-05/1653692889_1-kartinkof-club-p-paren-veselii-kartinki-1.jpg'}/>
                </div>
            </div>
        </div>
    );
};

