import React, { useState } from 'react'
import styles from './menu.module.scss'
import { MenuItem } from './MenuItem/MenuItem'
import { BurgerMenu } from '../Burger/BurgerMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sectionIdName } from '../../../constans/sectionIdName'
import {
    faListAlt,
    faContactBook,
    faBriefcase,
    faHome,
} from '@fortawesome/free-solid-svg-icons'

const home = <FontAwesomeIcon icon={faHome} />
const briefcase = <FontAwesomeIcon icon={faBriefcase} />
const listAlt = <FontAwesomeIcon icon={faListAlt} />
const contact = <FontAwesomeIcon icon={faContactBook} />

const dataMenu = [
    { id: 0, img: home, name: sectionIdName.main },
    { id: 1, img: briefcase, name: sectionIdName.skills },
    { id: 2, img: listAlt, name: sectionIdName.myWorks },
    { id: 4, img: contact, name: sectionIdName.contacts },
]

export const Menu = () => {
    const [isOpen, setOpenClose] = useState(false)

    const handleMenuToggle = () => {
        setOpenClose(!isOpen)
    }
    const handleMenuClose = () => {
        setOpenClose(false)
    }

    return (
        <nav tabIndex={0} onBlur={handleMenuClose}>
            <BurgerMenu handleMenuToggle={handleMenuToggle} isOpen={isOpen} />

            <div className={styles.menu + ' ' + (isOpen ? styles.active : ' ')}>
                <ul className={styles.listItem}>
                    {dataMenu.map((item) => {
                        return (
                            <MenuItem
                                key={item.id}
                                id={item.id}
                                svg={item.img}
                                name={item.name}
                            />
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
