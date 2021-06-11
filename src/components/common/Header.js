import React from "react";
import './Header.css';

export default function Header(props) {
    const {text} = props;
    return (
        <h1>{text}</h1>
    )
}