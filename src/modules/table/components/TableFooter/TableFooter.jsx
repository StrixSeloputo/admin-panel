import React from "react";
import './style.css';
import {ChangeStatusButton, DeleteButton, RowCounter} from "..";

export const TableFooter = (props) => {
    const {selectedCount} = props;
    return (
        <div className="table-footer">
            <div className="inline">
                <RowCounter count={selectedCount}/>
                <ChangeStatusButton />
                <DeleteButton />
            </div>
        </div>
    )
}