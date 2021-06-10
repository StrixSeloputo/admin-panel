import React from "react";
import './Table.css';
import TableRow from "./TableRow";

function TableBody(props) {
    const {orders, onSelect} = props;
    const rows = orders.map(order => <TableRow key={order.id} order={order} onSelect={onSelect}/>);
    return (
        <div className="table__body">
            {rows}
        </div>
    )
}

export default TableBody;