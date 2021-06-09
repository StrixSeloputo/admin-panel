import React from 'react';

function Input(props) {
    const {hint} = props
    return (
        <input type="text" placeholder={hint} />
    );
}

export default Input;
