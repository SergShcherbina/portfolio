import React from 'react';
import {Icon} from "../../../Components";
import s from "./contactItem.module.scss";

export const ContactItem = ({iconId, description, link}) => {
    return (
        <li className={s.item}>
            <a className={s.wrapperContent} href={link} target="_blank" rel="noopener noreferrer">
                <div className={s.content} >
                    <Icon iconId={iconId}/>
                    <p className={s.description}>{description}</p>
                </div>
            </a>
        </li>
    );
};
