import React from 'react';
import {Title} from "../common/Components/Title";
import styles from './skills.module.scss';
import s from '../common/styles/container.module.scss';
import {Skill} from "./Skill/Skill";
import {SvgCss} from "../assets/icons/SvgCss";
import {IconHtml} from "../assets/icons/IconHtml";
import {IconJs} from "../assets/icons/IconJs";
import {IconReact} from "../assets/icons/IconReact";
import {IconGit} from "../assets/icons/iconGit";
import {IconRedux} from "../assets/icons/iconRedux";
import {IconPostman} from "../assets/icons/IconPostman";
import {IconTypescript} from "../assets/icons/iconTypescript";

export const Skills = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={s.container}>
                <Title text={'Навыки'}/>
                <div>
                    <ul className={styles.wrapperSkills}>
                        <Skill
                            icon={<IconHtml/>}
                            title={'HTML'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<SvgCss/>}
                            title={'CSS'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconJs/>}
                            title={'JS'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconTypescript/>}
                            title={'TS'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconReact/>}
                            title={'React'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconRedux/>}
                            title={'Redux'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconGit/>}
                            title={'Git'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>
                        <Skill
                            icon={<IconPostman/>}
                            title={'Postman'}
                            deskr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'}/>

                    </ul>
                </div>
            </div>
        </div>
    );
};
