import React from "react";
import './style.css';
import {TableRow} from "..";

export const TableBody = (props) => {
    const {orders, onSelect} = props;
    const rows = orders.map(order => <TableRow key={order.id} order={order} onSelect={onSelect}/>);
    return (
        <div className="table__body">
            {rows}
        </div>
    )
}