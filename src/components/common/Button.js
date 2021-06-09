import React from "react";
import './Button.css';
import Text from "./Text";
import Icon from "./Icon";

function Button(props) {
    const {text, icon, style, onClick, className} = props;
    const iconComponent = icon && <Icon icon={icon} />
    const textComponent = text && <Text text={text} />
    return (
        // <button className={"button"} style={{background: style.color}}>
    <button onClick={onClick} className={className}>
        {iconComponent}
        {textComponent}
    </button>
    )
}

export default Button;