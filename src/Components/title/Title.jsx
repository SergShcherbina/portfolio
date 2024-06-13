import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './title.module.scss'

export const Title = (props) => {
    return (
        <Fade left>
            <h2 className={`${styles.title} ${props.className}`}>
                {props.text}
                <span className={styles.divider} />
            </h2>
        </Fade>
    )
}
