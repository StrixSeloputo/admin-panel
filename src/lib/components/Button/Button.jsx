import React from "react";
import './style.css';
import {Icon, Text} from "../index";

export const Button = (props) => {
    const {text, textClass, icon, iconClass, className, onClick} = props;
    return (
        <button className={className}
                onClick={onClick}>
            {!!icon && <Icon icon={icon} className={iconClass}/>}
            {!!text && <Text text={text} className={textClass}/>}
        </button>
    )
}