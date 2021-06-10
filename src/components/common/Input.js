import React from 'react';

function Input(props) {
    const {hint, className} = props
    return (
        <input type="text" placeholder={hint} className={className}/>
    );
}

export default Input;
