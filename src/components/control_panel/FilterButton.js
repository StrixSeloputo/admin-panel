import React, {Component} from "react";
import Button from "../common/Button";
import './FilterButton.css'

class FilterButton extends Component {

    render() {
        const {openFilter} = this.props;
        return (
            <div className="filter-button">
                <Button onClick={openFilter}
                        text="Фильтры" />
            </div>
        )
    }
}

export default FilterButton;