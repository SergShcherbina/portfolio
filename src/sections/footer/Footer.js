import React from 'react'
import Fade from 'react-reveal/Fade'
import { Icon } from '../../Components'
import { footerTextModel } from './schemas'
import { contactTextModel } from '../contacts/schemas'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapperFooter}>
                <Fade>
                    <h5 className={styles.title}>{footerTextModel.name}</h5>

                    <ul className={styles.listItem}>
                        {contactTextModel.contacts.map((el) => (
                            <li className={styles.item} key={el.description}>
                                <a
                                    className={styles.link}
                                    href={el.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon iconId={el.iconId} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Fade>

                <p className={styles.copyright}>
                    {' '}
                    {footerTextModel.copyright}{' '}
                </p>
            </div>
        </footer>
    )
}
