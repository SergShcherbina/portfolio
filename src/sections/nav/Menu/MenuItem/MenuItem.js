import React from 'react'
import { Link } from 'react-scroll'
import styles from './menuItem.module.scss'

export const MenuItem = (props) => {
    return (
        <li className={styles.item}>
            <Link
                activeClass={styles.active}
                to={props.name}
                spy={true}
                smooth={true}
                duration={500}
                delay={100}
            >
                {props.svg}
                <span className={styles.text}>{props.name}</span>
            </Link>
        </li>
    )
}
