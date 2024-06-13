import React from 'react'
import { Title } from '../../Components'
import { ContactItem } from './contact/ContactItem'
import { sectionIdName } from '../../common/constans/sectionIdName'
import Fade from 'react-reveal/Fade'
import { Form } from './form/Form'
import { contactTextModel } from './schemas'
import styles from './contacts.module.scss'
import s from '../../common/styles/container.module.scss'

export const Contacts = () => {
    return (
        <div id={sectionIdName.contacts} className={styles.contacts}>
            <div className={s.container}>
                <Title text={sectionIdName.contacts} />
                <Fade>
                    <div className={styles.wrapperContent}>
                        <ul className={styles.listItems}>
                            {contactTextModel.contacts.map(
                                ({ iconId, description, link }) => {
                                    return (
                                        <ContactItem
                                            key={description}
                                            iconId={iconId}
                                            description={description}
                                            link={link}
                                        />
                                    )
                                }
                            )}
                        </ul>

                        <Form />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
