import React from "react";
import Button from "../common/Button";
import bin from '../../resources/icons/bin.svg';

export default function DeleteButton() {
    return (
        <Button className="red-small"
                icon={bin}
                text="Удалить" />
    )
}