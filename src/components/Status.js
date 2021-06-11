import React from "react";
import Icon from './common/Icon';
import Text from "./common/Text";
import abort from '../resources/icons/abort.svg';
import checkmark from '../resources/icons/checkmark.svg';
import dot from '../resources/icons/dot.svg';

export default function Status(props) {
    const {statusId} = props;
    switch (statusId.toUpperCase()) {
        case 'NEW':
            return (
                <div className="inline">
                    <Icon className="orange"
                          icon={dot}/>
                    <Text text="Новый"/>
                </div>
            )

        case 'CALCULATION':
            return (
                <div className="inline">
                    <Icon className="blue"
                          icon={dot}/>
                    <Text text="Рассчет"/>
                </div>
            )

        case 'CONFIRMED':
            return (
                <div className="inline">
                    <Icon className="blue"
                          icon={dot}/>
                    <Text text="Подтвержден"/>
                </div>
            )

        case 'DEFERRED':
            return (
                <div className="inline">
                    <Icon className="orange"
                          icon={dot}/>
                    <Text text="Отложен"/>
                </div>
            )

        case 'DONE':
            return (
                <div className="inline opacity-50">
                    <Icon className="green"
                          icon={checkmark}/>
                    <Text className="green"
                          text="Выполнен"/>
                </div>
            )

        case 'CANCELLED':
            return (
                <div className="inline opacity-50">
                    <Icon className="black"
                          icon={abort}/>
                    <Text className="black"
                          text="Отменен"/>
                </div>
            )

        default:
            return (
                <div className="inline">
                    <Icon className="red"
                          icon={abort}/>
                    <Text className="red"
                          text="Unknown status"/>
                </div>
            )
    }
}