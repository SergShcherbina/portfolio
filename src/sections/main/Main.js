import React from 'react';
import avatar from '../../assets/images/avatar.png'
import {sectionIdName} from "../../common/constans/sectionIdName";
import Debounce from 'react-reveal/Bounce';
import ReactTypingEffect from 'react-typing-effect';
import {useParallax} from "react-scroll-parallax";
import {Icon} from "../../Components";
import styles from "./Main.module.scss"
import styleContainer from '../../common/styles/container.module.scss'
import {mainTextModel} from "./schemas";

export const Main = () => {
    const { ref } = useParallax({ speed: 10, translateY: [100, -100] });

    return (
        <div id={sectionIdName.main} className={styles.mainBlock} >
            <div className={styleContainer.container}>
                <Debounce>
                    <div className={styles.wrapper}>
                        <div className={styles.circle}>
                            <div className={styles.wrapperPhoto}>
                                <img className={styles.photo} src={avatar} ref={ref} alt={"user photo"}/>
                            </div>
                        </div>
                        <div className={styles.wrapperDescription}>
                                <p className= {styles.greetings}> {mainTextModel.welcome} </p>

                            <div className={styles.wrapperTitle}>
                                <h1 className={styles.title} >{mainTextModel.name}</h1>
                                <Icon iconId={"react"} className={styles.logoReact}/>
                            </div>
                            <div className={styles.subTitle}>
                                <ReactTypingEffect
                                    text={mainTextModel.description}
                                    speed={100}
                                />
                            </div>

                                <div>
                                    <a className={styles.button}
                                       href={`/portfolio/cv-shcherbina.pdf`}
                                       download={"cv-shcherbina.pdf"}
                                    > Cкачать CV <Icon iconId={"download"} className={styles.icon}/>
                                    </a>
                                </div>
                        </div>
                    </div>
                </Debounce>
            </div>
        </div>
    )
}



