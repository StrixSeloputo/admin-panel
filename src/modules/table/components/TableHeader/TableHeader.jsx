import React from "react";
import './style.css';
import {Checkbox, Text} from "../../../../lib";

export const TableHeader = (props) => {
    const {onSelect, selectedAll} = props;
    return (
        <div className="table__header">
            <div className="table__row">
                <div className="table__cell">
                    <Checkbox selected={selectedAll} onClick={onSelect} />
                </div>
                <div className="table__cell">
                    <Text text={'#'} />
                </div>
                <div className="table__cell">
                    <Text text={'Дата'} />
                </div>
                <div className="table__cell">
                    <Text text={'Статус'} />
                </div>
                <div className="table__cell">
                    <Text text={'Позиций'} />
                </div>
                <div className="table__cell">
                    <Text text={'Сумма'} />
                </div>
                <div className="table__cell">
                    <Text text={'ФИО'} />
                </div>
            </div>
            {/* todo sorting */}
        </div>
    )
}