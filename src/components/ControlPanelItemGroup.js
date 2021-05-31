import React from "react";
import './ControlPanel.css';
import ControlPanelItem from "./ControlPanelItem";
import ControlPanelTextInput from "./ControlPanelTextInput";

function ControlPanelItemGroup() {
    return (
        <div className="control-panel__item-group">
            <ControlPanelTextInput/>
            <ControlPanelItem/>
        </div>
    )
}

export default ControlPanelItemGroup;