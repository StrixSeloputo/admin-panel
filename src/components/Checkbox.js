import React from "react";
import './Checkbox.css';

function Checkbox(props) {
    const {selected} = props
    return (
        // <input type="checkbox" className="checkbox" checked={selected}/>
    <input type="checkbox"/>
    )
}

export default Checkbox;