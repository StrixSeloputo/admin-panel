import React from "react";
import './Table.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

function Table() {
    return (
        <div className="table__wrapper">
            <TableHeader table={{selected: false}}/>
            <TableBody/>
            <TableFooter/>
        </div>
    )
}

export default Table;