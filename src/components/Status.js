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
                    <Text text="New"/>
                </div>
            )

        case 'CALCULATION':
            return (
                <div className="status">
                    <StatusIcon color="BLUE"/>
                    <Text text="Calculation"/>
                </div>
            )

        case 'CONFIRMED':
            return (
                <div className="status">
                    <StatusIcon color="BLUE"/>
                    <Text text="Confirmed"/>
                </div>
            )

        case 'DEFERRED':
            return (
                <div className="status">
                    <StatusIcon color="ORANGE"/>
                    <Text text="Deferred"/>
                </div>
            )

        case 'DONE':
            return (
                <div className="status">
                    <StatusIcon color="GREEN"/>
                    <Text text="Done"/>
                </div>
            )

        case 'CANCELLED':
            return (
                <div className="status">
                    <StatusIcon color="GREY"/>
                    <Text text="Cancelled"/>
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