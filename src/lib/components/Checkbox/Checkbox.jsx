import React from "react";
import './style.css';
import {Text} from "../Text";

export const Checkbox = (props) => {
    const {selected, id, label, onClick} = props
    return (
        <div className="checkbox inline" onClick={onClick}>
            <input type="checkbox" id={id} key={id}
                   checked={selected} onChange={onClick}/>
            {!!label && <Text text={label}/>}
        </div>
    )
}