import React from 'react';
import sprite from '../../assets/icons/sprite.svg'

export const Icon = ({iconId, className, height, width, onClick, color})  => {
    return (
        <svg
            role="icon"
            width={width || "40px"}
            height={height || "40px"}
            className={className}
            onClick={onClick}
            color={color}
        >
            <use width={"100%"} height={"100%"} fill={color} xlinkHref={`${sprite}#${iconId}`} />
        </svg>
    )
}
