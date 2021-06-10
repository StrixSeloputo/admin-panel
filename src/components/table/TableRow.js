import React, {Component} from "react";
import './Table.css';
import Checkbox from "../common/Checkbox";
import Status from '../Status';
import Text from "../common/Text";

export default class TableRow extends Component {
    render() {
        const {order} = this.props;
        return (
            <div className="table__row">
                <div className="table__cell">
                    <Checkbox selected={order.selected}
                              onChange={this.onSelect}/>
                </div>
                <div className="table__cell">
                    <Text text={order.id}/>
                </div>
                <div className="table__cell">
                    <Text text={(new Date(order.date)).toDateString()}/>
                </div>
                <div className="table__cell">
                    <Status statusId={order.statusId}/>
                </div>
                <div className="table__cell">
                    <Text text={order.itemsNumber}/>
                </div>
                <div className="table__cell">
                    <Text text={order.sumNumber + ' ' + order.sumCurrency}/>
                </div>
                <div className="table__cell">
                    <Text text={order.customerFullName}/>
                </div>
            </div>
        )
    }

    //todo можно ли переделать?
    onSelect = () => {
        const {order, onSelect} = this.props;
        onSelect(order.id, !order.selected);
    }
}