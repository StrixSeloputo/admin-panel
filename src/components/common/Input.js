import React from 'react';
import Text from "./Text";
import Icon from "./Icon";
import './Input.css';

export default function Input(props) {
    const {hint, className, label, icon} = props
    const labelTag = label && <Text className="input" text={label}/>
    const iconTag = icon && <Icon className="input" icon={icon}/>
    return (
        <div className="inline margin-right-4">
            {iconTag}
            {labelTag}
            <input type="text"
                   placeholder={hint}
                   className={className}/>
        </div>
    );
}
