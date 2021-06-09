import React from "react";
import './TableFooter.css';
import RowCounter from "./RowCounter";
import ChangeStatusButton from "./ChangeStatusButton";
import DeleteButton from "./DeleteButton";

function TableFooter() {
    return (
        <div className="table-footer">
            <div className="action-button">
                <RowCounter />
                <ChangeStatusButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default TableFooter;