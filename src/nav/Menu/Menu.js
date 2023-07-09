import React, {useState} from 'react';
import styles from "./menu.module.scss"
import {MenuItem} from "./MenuItem/MenuItem";
import {BurgerMenu} from "../Burger/BurgerMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {sectionIdName} from "../../common/variableReact/sectionIdName";
import {
    faListAlt,
    faContactBook,
    faBriefcase,
    faHome
} from '@fortawesome/free-solid-svg-icons';


export const Menu = () => {
        const home = <FontAwesomeIcon icon={faHome}/>
        const briefcase = <FontAwesomeIcon icon={faBriefcase}/>
        const listAlt = <FontAwesomeIcon icon={faListAlt}/>
        const contact = <FontAwesomeIcon icon={faContactBook}/>
        const dataMenu = [
            {id: 0, img: home, name: sectionIdName.main},
            {id: 1, img: briefcase, name: sectionIdName.skills},
            {id: 2, img: listAlt, name: sectionIdName.myWorks},
            {id: 3, img: contact, name: sectionIdName.contacts},
        ]

        const [isOpen, setOpenClose] = useState(false)

        const handleMenuToggle = () => {
            setOpenClose(!isOpen)
        }
        const handleMenuClose = () => {
            setOpenClose(false)
        }
        const mappedMenuItem = dataMenu.map(item => {
            return <MenuItem
                key={item.id}
                id={item.id}
                svg={item.img}
                name={item.name}/>
        })

        return (
            <nav tabIndex={0}
                 onBlur={handleMenuClose}
            >
                <BurgerMenu handleMenuToggle={handleMenuToggle}/>
                <div className={styles.menu + ' ' + (isOpen ? styles.active : ' ')}>
                    <ul className={styles.listItem}>
                        {mappedMenuItem}
                    </ul>
                </div>
            </nav>

        );
    }
;
