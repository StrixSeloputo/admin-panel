import React from "react";
import './Header.css';
import HeaderText from './common/HeaderText';
import ThemeSwitcher from "./ThemeSwitcher";

function Header(props) {
    const {text} = props;
    return (
        <div className="header">
            <HeaderText text={text}/>
            <ThemeSwitcher theme="light"/>
        </div>
    )
}

export default Header;