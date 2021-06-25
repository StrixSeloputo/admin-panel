import React from "react";
import {Button} from "../../../../lib";

export const RowCounter = (props) => {
    const {count} = props;
    return (
        <Button className="link small-0"
                text={"Выбрано записей: "+count} />
    )
}