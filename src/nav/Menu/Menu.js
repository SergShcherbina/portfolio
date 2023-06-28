import React from 'react';
import styles from "./menu.module.scss"
import {MenuItem} from "./MenuItem/MenuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';

export const Menu = () => {
    const home = <FontAwesomeIcon icon={faHome} />
    const briefcase = <FontAwesomeIcon icon={faBriefcase} />
    const listAlt = <FontAwesomeIcon icon={faListAlt} />
    const contact = <FontAwesomeIcon icon={faContactBook} />

    return (
        <nav className={styles.menu}>
            <ul className={styles.listItem}>
                <MenuItem svg={home} name={'Home'} />
                <MenuItem svg={briefcase} name={'Skills'} />
                <MenuItem svg={listAlt} name={'Portfolio'} />
                <MenuItem svg={contact} name={'Contacts'} />
            </ul>
        </nav>
    );
};

