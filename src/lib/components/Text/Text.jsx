import React from "react";
import './style.css';

export const Text = (props) => {
    const {text, className} = props;
    return (
        <p className={className}
           align={className==="input" ? "right" : "left"}>{text}</p>
    )
}