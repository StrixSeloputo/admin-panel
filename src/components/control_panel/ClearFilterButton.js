import React, {Component} from "react";
import Button from "../common/Button";

export default class ClearFilterButton extends Component {
    render() {
        return (
        <Button //onClick={this.props.clearFilter}
                className="link padding-8-0"
                text="Сбросить фильтры" />
        )
    }
}