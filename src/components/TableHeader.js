import React from "react";
import './Table.css';
import Checkbox from "./Checkbox";
import Text from "./Text";

function TableHeader(props) {
    const {selectedAll} = props
    return (
        <div className="table__header">
            <div className="table__row">
                <div className="table__cell">
                    <Checkbox selected={false} />
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
            {/* todo */}
            </div>
    )
}

export default TableHeader;