import React from "react";
import Button from "../common/Button";
import pencil from '../../resources/icons/pencil.svg';

export default function ChangeStatusButton() {
    return (
        <Button className="blue-small"
                icon={pencil}
                text="Изменить статус"/>
    )
}