import React, {Component} from "react";
import './FilterPanel.css'
import Text from "../common/Text";
import Input from "../common/Input";
import Button from "../common/Button";

export default class FilterPanel extends Component {
    render() {
        return (
            <div className="filter-panel">
                <div className="filter">
                    <Text className="margin-bottom-8"
                          text="Дата оформления"/>
                    <div className="inline">
                        <Input className="width-142"
                               label="с"
                               hint="dd.mm.yyyy"/>
                        <Input className="width-142"
                               label="по"
                               hint="dd.mm.yyyy"/>
                    </div>
                </div>
                <div className="filter">
                    <Text className="margin-bottom-8"
                          text="Статус заказа"/>
                    <Input className="width-192"/>
                </div>
                <div className="filter">
                    <Text className="margin-bottom-8"
                          text="Сумма заказа"/>
                    <div className="inline">
                        <Input className="width-126"
                               label="от"/>
                        <Input className="width-126"
                               label="до"/>
                    </div>
                </div>
                <Button className="link padding-left-8"
                        text="Применить" />
            </div>
        )
    }
}