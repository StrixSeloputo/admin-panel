import React from "react";
import './Status.css';
import StatusIcon from './StatusIcon';
import Text from "./Text";

function Status(props) {
    const {statusId} = props;
    switch (statusId.toUpperCase()) {
        case 'NEW':
            return (
                <div className="status">
                    <StatusIcon color="ORANGE"/>
                    <Text text="Новый"/>
                </div>
            )

        case 'CALCULATION':
            return (
                <div className="status">
                    <StatusIcon color="BLUE"/>
                    <Text text="Рассчет"/>
                </div>
            )

        case 'CONFIRMED':
            return (
                <div className="status">
                    <StatusIcon color="BLUE"/>
                    <Text text="Подтвержден"/>
                </div>
            )

        case 'DEFERRED':
            return (
                <div className="status">
                    <StatusIcon color="ORANGE"/>
                    <Text text="Отложен"/>
                </div>
            )

        case 'DONE':
            return (
                <div className="status">
                    <StatusIcon color="GREEN"/>
                    <Text text="Выполнен"/>
                </div>
            )

        case 'CANCELLED':
            return (
                <div className="status">
                    <StatusIcon color="GREY"/>
                    <Text text="Отменен"/>
                </div>
            )

        default:
            return (
                <div className="status">
                    <StatusIcon color="RED"/>
                    <Text text="Unknown status"/>
                </div>
            )
    }
}

export default Status;