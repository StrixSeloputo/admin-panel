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
                        <Input className="width-142 margin-right-4"/>
                        <Input className="width-142"/>
                    </div>
                </div>
                <div className="filter">
                    <Text className="margin-bottom-8"
                          text="Статус заказа"/>
                    <div className="inline">
                        <Input className="width-142"/>
                    </div>
                </div>
                <div className="filter">
                    <Text className="margin-bottom-8"
                          text="Сумма заказа"/>
                    <div className="inline">
                        <Input className="width-142 margin-right-4"/>
                        <Input className="width-142"/>
                    </div>
                </div>
                <Button className="link padding-left-8"
                        text="Применить" />
            </div>
        )
    }
}