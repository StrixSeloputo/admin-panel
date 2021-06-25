import React from "react";
import './style.css'
import {Button, Dropdown, Input, Text} from '../../../../lib';
import {statuses} from "../../../../store/status";

export const FilterPanel = () => {
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
                <Dropdown source={statuses} multiselect={true}/>
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