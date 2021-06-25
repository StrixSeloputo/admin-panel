import React from "react";
import '../../../../style.css';
import {Button} from "../../../../lib";

export const ClearFilterButton = () => {
    return (
    <Button //onClick={this.props.clearFilter}
            className="link medium-0"
            text="Сбросить фильтры" />
    )
}