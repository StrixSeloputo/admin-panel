import React from "react";
import './ControlPanel.css';
import ControlPanelExtraItems from "./ControlPanelExtraItems";
import ControlPanelItemGroup from "./ControlPanelItemGroup";

function ControlPanel() {
    return (
        <div className="control-panel">
            <ControlPanelItemGroup/>
            <ControlPanelExtraItems/>
        </div>
    )
}

export default ControlPanel;