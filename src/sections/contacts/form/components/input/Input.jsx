import React from 'react'
import styles from './input.module.scss'

export const Input = ({ item, onChange, onBlur, formState }) => {
    const { errorMessage, labelText, ...rest } = item

    return (
        <label className={styles.label}>
            {labelText}
            <input
                {...rest}
                type={rest.type || 'text'}
                value={formState[rest.name.value]}
                onChange={onChange}
                onBlur={onBlur}
                data-touched={formState[rest.name].touched}
                className={styles.input}
            />
            <p className={styles.error}>{errorMessage}</p>
        </label>
    )
}
