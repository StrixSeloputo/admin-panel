import React, {Component} from "react";
import Button from "../common/Button";

export default class FilterButton extends Component {
    render() {
        return (
            <Button onClick={this.props.switchFilter}
                    className={this.props.isFilterOpen ? "blue-medium" : "link-padding-16"}
                    text="Фильтры" />
        )
    }
}