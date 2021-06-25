import React from "react";
import './style.css';

export const Icon = (props) => {
    const {icon, className, onClick} = props;
    return (
        <img className={className}
             src={icon}
             alt={icon}
             onClick={onClick}/>
        // <svg>
        //     <use xlink:href="#bike" />
        // </svg>
    )
}