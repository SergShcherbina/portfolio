import React from 'react'
import style from './myWorks.module.scss'
import styles from '../../../common/styles/container.module.scss'
import { MyWork } from './myWork/MyWork'
import { Title } from '../../../Components'
import { sectionIdName } from '../../../common/constans/sectionIdName'
import { myWorksTextModel } from '../schemas/myWorksTextModel'

export const MyWorks = () => {
    return (
        <div id={sectionIdName.myWorks} className={style.works}>
            <div className={styles.container}>
                <Title text={sectionIdName.myWorks} />

                <ul className={style.wrapper}>
                    {myWorksTextModel.map((el) => {
                        return (
                            <MyWork
                                key={el.title}
                                title={el.title}
                                desr={el.description}
                                src={el.image}
                                linkToProject={el.linkToProject}
                                linkToGithub={el.linkToGithub}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
