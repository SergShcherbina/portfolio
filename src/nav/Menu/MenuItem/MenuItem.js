import React from 'react';
import styles from "./menuItem.module.scss";
import {Link} from "react-scroll";
import {sectionIdName} from "../../../common/variableReact/sectionIdName";

export const MenuItem = (props) => {

    return (
        <Link activeClass={styles.active}
              to={props.name}
              spy={true}
              smooth={true}
              offset={props.name === sectionIdName.contacts ? -400 : -50}
              duration={500}
              delay={100}
        >
            <li className={styles.wrapperItem}>
                <p className={styles.item}>
                    <p className={styles.icon}>{props.svg}</p>
                    <span className={props.class}></span>
                </p>
                <a className={styles.link} src={'#'}>{props.name}</a>
            </li>
        </Link>
    );
};

