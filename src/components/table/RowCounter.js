import React from "react";
import Button from "../common/Button";

export default function RowCounter({count}) {
    return (
        <Button className="link padding-8-0"
                text={"Выбрано записей: "+count} />
    )
}