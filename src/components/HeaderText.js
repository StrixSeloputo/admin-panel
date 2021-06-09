import React from "react";
import './Header.css';

function HeaderText(props) {
    const {text} = props;
    return (
        <div className="header__text">{text}</div>
    )
}

export default HeaderText;