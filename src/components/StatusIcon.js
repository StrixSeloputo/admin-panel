import React from "react";
import dot from '../resources/icons/dot.svg';
import Icon from "./common/Icon";

export default function StatusIcon(props) {
    const {className} = props;
    return (
        <Icon icon={dot} className={className}/>
    )
}