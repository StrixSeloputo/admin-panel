import React from "react";
import './Table.css';
import Checkbox from "../common/Checkbox";
import Text from "../common/Text";

function TableHeader(props) {
    const {onSelect, selectedAll} = props;
    return (
        <div className="table__header">
            <div className="table__row">
                <div className="table__cell">
                    <Checkbox selected={selectedAll} onChange={onSelect} />
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

export default TableHeader;