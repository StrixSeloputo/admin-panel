import React from "react";
import './Table.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

function Table(props) {
    const {orders, selectedAll} = props;
    return (
        <div className="table__wrapper">
            <TableHeader selectedAll={selectedAll}/>
            <TableBody orders={orders} selectedAll={selectedAll}/>
            <TableFooter/>
        </div>
    )
}

export default Table;