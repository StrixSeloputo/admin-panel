import React from "react";
import './Icon.css';

function Icon(props) {
    const {icon} = props;
    return (
        <img className="icon" src={icon} alt={icon}/>
    )
}

export default Icon;