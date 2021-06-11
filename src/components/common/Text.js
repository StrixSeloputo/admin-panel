import React from "react";
import './Text.css';

export default function Text(props) {
    const {text, className} = props;
    return (
        <p className={className} align={className==="input" ? "right" : "left"}>{text}</p>
    )
}