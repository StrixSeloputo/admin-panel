import React from "react";
import {Dropdown} from "../../../../lib";
import pencil from '../../../../resources/icons/pencil.svg';
import {statuses} from "../../../../store/status";

export const ChangeStatusButton = () => {
    return (
        <Dropdown className="blue small"
                  icon={pencil}
                  text="Изменить статус"
                  source={statuses}/>
    )
}