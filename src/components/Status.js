import React from "react";
import './Status.css';
import StatusIcon from './StatusIcon';
import Text from "./common/Text";

function Status(props) {
    const {statusId} = props;
    switch (statusId.toUpperCase()) {
        case 'NEW':
            return (
                <div className="status">
                    <StatusIcon className="orange"/>
                    <Text text="Новый"/>
                </div>
            )

        case 'CALCULATION':
            return (
                <div className="status">
                    <StatusIcon className="blue"/>
                    <Text text="Рассчет"/>
                </div>
            )

        case 'CONFIRMED':
            return (
                <div className="status">
                    <StatusIcon className="blue"/>
                    <Text text="Подтвержден"/>
                </div>
            )

        case 'DEFERRED':
            return (
                <div className="status">
                    <StatusIcon className="orange"/>
                    <Text text="Отложен"/>
                </div>
            )

        case 'DONE':
            return (
                <div className="status">
                    <StatusIcon className="green"/>
                    <Text text="Выполнен"/>
                </div>
            )

        case 'CANCELLED':
            return (
                <div className="status">
                    <StatusIcon className="black"/>
                    <Text text="Отменен"/>
                </div>
            )

        default:
            return (
                <div className="status">
                    <StatusIcon className="red"/>
                    <Text text="Unknown status"/>
                </div>
            )
    }
}

export default Status;