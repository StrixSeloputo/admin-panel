import React, {useState} from 'react';
import {Icon, Text} from "../index";
import './style.css';
import x_medium from '../../../resources/icons/x-medium.svg';

export const Input = (props) => {
    const {hint, className, label, icon} = props;
    const labelTag = label && <Text className="input-left" text={label}/>
    const iconTag = icon && <Icon className="input-left" icon={icon}/>

    const [value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);

    const clear = () => {
        setValue('');
    }

    return (
        <div className="inline margin-right-4">
            {iconTag}
            {labelTag}
            <input type="text"
                   placeholder={hint}
                   value={value}
                   onChange={handleChange}
                   className={className}/>
            {value !== '' && <Icon className="input-right" icon={x_medium} onClick={clear}/>}
        </div>
    );
}
