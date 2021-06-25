import React from "react";
import '../Table/style.css';
import {Checkbox, Text} from '../../../../lib';
import {Status} from "../../..";

export const TableRow = (props) => {
    const {order} = props;

    const onSelect = () => { //todo можно ли переделать?
        props.onSelect(order.id, !order.selected);
    }

    return (
        <div className="table__row">
            <div className="table__cell">
                <Checkbox selected={order.selected}
                          onClick={onSelect}/>
            </div>
            <div className="table__cell">
                <Text text={order.id}/>
            </div>
            <div className="table__cell">
                <Text text={(new Date(order.date)).toDateString()}/>
            </div>
            <div className="table__cell">
                <Status statusId={order.statusId}/>
            </div>
            <div className="table__cell">
                <Text text={order.itemsNumber}/>
            </div>
            <div className="table__cell">
                <Text text={order.sumNumber + ' ' + order.sumCurrency}/>
            </div>
            <div className="table__cell">
                <Text text={order.customerFullName}/>
            </div>
        </div>
    )
}
