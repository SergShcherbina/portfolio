import React from 'react';
import style from "./Main.module.css"
import styleContainer from '../common/styles/Styles.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <h1 className={style.title} >Привет! <br/> Меня зовут Сергей. <br/> Я front-end разработчик </h1>
                    <img className={style.photo} src={'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'}/>
                </div>
            </div>
        </div>
    );
};

