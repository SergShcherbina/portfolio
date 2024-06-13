import React from 'react'
import styles from './burgerMenu.module.scss'

export const BurgerMenu = (props) => {
    const handleMenuToggle = () => {
        props.handleMenuToggle()
    }

    return (
        <div className={styles.header}>
            <div className={styles.burger} onClick={handleMenuToggle}>
                <span className={props.isOpen ? styles.active : ' '}></span>
            </div>
        </div>
    )
}
