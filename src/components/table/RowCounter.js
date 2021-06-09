import React from "react";
import './RowCounter.css'
import Text from "../common/Text";

export default function RowCounter() {
    return (
        <div className="row-counter">
            <Text text={"Выбрано записей: 5"} />
        </div>
    )
}