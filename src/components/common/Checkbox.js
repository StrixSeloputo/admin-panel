import React from "react";
import './Checkbox.css';

function Checkbox(props) {
    const {onChange, selected} = props
    return (
        <input type="checkbox"
               checked={selected}
               onChange={onChange} />
    )
}

export default Checkbox;