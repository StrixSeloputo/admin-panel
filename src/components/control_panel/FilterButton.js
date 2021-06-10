import React, {Component} from "react";
import Button from "../common/Button";
import filter from '../../resources/icons/filter.svg';

export default class FilterButton extends Component {
    render() {
        return (
            <Button className={this.props.isFilterOpen ? "blue-medium" : "link padding-8-16"}
                    icon={filter}
                    text="Фильтры"
                    onClick={this.props.switchFilter} />
        )
    }
}