import React from "react";
import './Table.css';
import TableRow from "./TableRow";
import orders from "../fixtures";

function TableBody() {
    return (
        <div className="table__body">
            <TableRow order={orders[0]} />
        </div>
    )
}

export default TableBody;