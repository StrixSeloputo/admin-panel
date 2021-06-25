import React, {Component} from "react";
import './style.css';
import {ClearFilterButton, FilterButton, FilterPanel, ReloadButton, Searchbar} from "..";

export class ControlPanel extends Component {
    state = {
        isFilterOpen: false
    }

    render() {
        const filterPanel = this.state.isFilterOpen && <FilterPanel/>;
        const clearFilterButton = this.state.isFilterOpen && <ClearFilterButton clearFilter={this.clearFilter.bind(this)} />;
        return (
            <div style={{marginBottom: "32px"}}>
                <div className="control-panel">
                    <div className="inline">
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
        this.clearFilter();
        this.setState({
            isFilterOpen: !this.state.isFilterOpen
        });
    }

    clearFilter = () => {/*todo*/}
}