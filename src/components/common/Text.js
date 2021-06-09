import React from "react";
import './Text.css';

function Text(props) {
    const {text} = props;
    return (
        <div className="text">{text}</div>
    )
}

export default Text;