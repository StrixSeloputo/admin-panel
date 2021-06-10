import React from "react";
import './HeaderText.css';

function HeaderText(props) {
    const {text} = props;
    return (
        <h1>{text}</h1>
    )
}

export default HeaderText;