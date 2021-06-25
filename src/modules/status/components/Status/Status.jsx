import React from "react";
import './style.css';
import {Button} from '../../../../lib';
import {getStatusById} from "../../../../store/status";

export const Status = (props) => {
    const {statusId, onClick} = props;
    const status = getStatusById(statusId);
    const icon = !onClick ? status.icon : null;
    const iconClass = !onClick ? status.color : null;
    const textClass = !onClick && status.isFinal ? status.color : null;

    return (
        <Button className={"inline status"+(status.isFinal ? " status-final" : "")}
                icon={icon}
                iconClass={iconClass}
                text={status.label}
                textClass={textClass}
                onClick={onClick}/>
    )
}