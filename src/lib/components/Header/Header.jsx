import React from "react";
import './style.css';

export const Header = (props) => {
    const {text} = props;
    return (
        <h1>{text}</h1>
    )
}