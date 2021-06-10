import React from "react";
import './Icon.css';

function Icon(props) {
    const {icon, className} = props;
    return (
        <img className={className} src={icon} alt={icon}/>
        // <svg>
        //     <use xlink:href="#bike" />
        // </svg>
    )
}

export default Icon;