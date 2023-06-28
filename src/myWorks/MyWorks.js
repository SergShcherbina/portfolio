import React from 'react';
import style from "./myWorks.module.scss"
import styles from '../common/styles/container.module.scss'
import {MyWork} from "./myWork/MyWork";
import {Title} from "../common/Components/Title";
import socialNetwork from '../assets/img/social.jpg'
import marvel from '../assets/img/marvel.jpg'
import todo from '../assets/img/todolist.jpg'

export const MyWorks = () => {
    return (
        <div className={style.works}>
            <div className={styles.container}>
                <Title text={'Мои работы'}/>
                <div className={style.wrapper}>
                    <MyWork title={'MARVEL'}
                            desr={' lorem  lorem  lorem  lorem  lorem  lorem lorem  '}
                            src={marvel}
                            href={'#'}/>
                    <MyWork
                        title={"Social"}
                        desr={' lorem  lorem  lorem  lorem  lorem  lorem '}
                        src={socialNetwork}
                        href={'#'}/>
                    <MyWork
                        title={"Todo"}
                        desr={' lorem  lorem  lorem  lorem  lorem  lorem '}
                        src={todo}
                        href={'#'}/>
                </div>
            </div>
        </div>
    );
};

