import React, {Component} from "react";
import Button from "../common/Button";
import './ClearFilterButton.css'

export default class ClearFilterButton extends Component {
    render() {
        return (
            <div className="clear-filter-button">
                <Button onClick={this.props.clearFilter}
                        text="Сбросить фильтры" />
            </div>
        )
    }
}