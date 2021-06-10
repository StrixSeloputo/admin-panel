import React from "react";
import './Text.css';

function Text(props) {
    const {text, className} = props;
    return (
        <p className={className}>{text}</p>
    )
}

export default Text;