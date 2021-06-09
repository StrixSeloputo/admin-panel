import React, {Component} from "react";
import './ControlPanel.css';
import Searchbar from "./Searchbar";
import FilterButton from "./FilterButton";
import ClearFilterButton from "./ClearFilterButton";
import ReloadButton from "./ReloadButton";
import FilterPanel from "./FilterPanel";

class ControlPanel extends Component {
    state = {
        isFilterOpen: false
    }

    render() {
        const filterPanel = this.state.isFilterOpen && <FilterPanel/>;
        return (
            <div style={{marginBottom: "32px"}}>
                <div className="control-panel">
                    <div className="control-panel__item-group">
                        <Searchbar/>
                        <FilterButton openFilter={this.openFilter} />
                        <ClearFilterButton/>
                    </div>
                    <div className="control-panel__extra-items">
                        <ReloadButton/>
                    </div>
                </div>
                {filterPanel}
            </div>
        )
    }

    openFilter = () => {
        this.setState({
            isFilterOpen: !this.state.isFilterOpen
        });
    }
}
export default ControlPanel;