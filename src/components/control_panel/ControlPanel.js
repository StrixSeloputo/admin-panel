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
        const clearFilterButton = this.state.isFilterOpen && <ClearFilterButton clearFilter={this.clearFilter.bind(this)} />;
        return (
            <div style={{marginBottom: "32px"}}>
                <div className="control-panel">
                    <div className="action-button">
                        <Searchbar/>
                        <FilterButton isFilterOpen={this.state.isFilterOpen}
                                      switchFilter={this.switchFilter.bind(this)} />
                        {clearFilterButton}
                    </div>
                    <div className="extra-action">
                        <ReloadButton/>
                    </div>
                </div>
                {filterPanel}
            </div>
        )
    }

    switchFilter = () => {
        console.log("switch filter");
        this.clearFilter();
        this.setState({
            isFilterOpen: !this.state.isFilterOpen
        });
    }

    clearFilter = () => {/*todo*/}
}
export default ControlPanel;