import React, {Component} from "react";
import Button from "../common/Button";

class FilterButton extends Component {

    render() {
        const {openFilter} = this.props;
        return (
            <Button onClick={openFilter}
                    className="blue-medium"
                    text="Фильтры" />
        )
    }
}

export default FilterButton;