import React from 'react'
import { Title } from '../../Components'
import { Skill } from './skill/Skill'
import { sectionIdName } from '../../constans/sectionIdName'
import Fade from 'react-reveal/Fade'
import { skillsTextModel } from './schemas'
import styles from './skills.module.scss'
import s from '../../common/styles/container.module.scss'

export const Skills = () => {
    return (
        <div id={sectionIdName.skills} className={styles.aboutMe}>
            <div className={s.container}>
                <Title text={sectionIdName.skills} />
                <Fade>
                    <ul className={styles.wrapperSkills}>
                        {skillsTextModel.skills.map((el, i) => {
                            return (
                                <Skill
                                    key={el.title + i}
                                    title={el.title}
                                    iconId={el.iconId}
                                />
                            )
                        })}
                    </ul>
                </Fade>
            </div>
        </div>
    )
}
