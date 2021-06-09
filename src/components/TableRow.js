import React from "react";
import './Table.css';
import Checkbox from "./Checkbox";
import Status from './Status';
import Text from "./Text";

function TableRow({order}) {
    return (
        <div className="table__row">
            <div className="table__cell">
                <Checkbox selected={order.selected} />
            </div>
            <div className="table__cell">
                <Text text={order.id} />
            </div>
            <div className="table__cell">
                <Text text={(new Date(order.date)).toDateString()} />
            </div>
            <div className="table__cell">
                <Status statusId={order.statusId} />
            </div>
            <div className="table__cell">
                <Text text={order.itemsNumber} />
            </div>
            <div className="table__cell">
                <Text text={order.sumNumber+' '+order.sumCurrency} />
            </div>
            <div className="table__cell">
                <Text text={order.customerFullName} />
            </div>
        </div>
    )
}

export default TableRow;