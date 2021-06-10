import React from "react";
import './TableFooter.css';
import RowCounter from "./RowCounter";
import ChangeStatusButton from "./ChangeStatusButton";
import DeleteButton from "./DeleteButton";

function TableFooter({selectedCount}) {
    return (
        <div className="table-footer">
            <div className="action-button">
                <RowCounter count={selectedCount}/>
                <ChangeStatusButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default TableFooter;