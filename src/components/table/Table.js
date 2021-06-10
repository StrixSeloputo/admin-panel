import React, {Component} from "react";
import './Table.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

export default class Table extends Component {
    state = {
        selectedAll: false,
        orders: this.props.orders,
        selectedCount: 0,
    }

    render() {
        return (
            <div className="table__wrapper">
                <TableHeader selectedAll={this.state.selectedAll}
                             onSelect={this.selectAll.bind(this)} />
                <TableBody orders={this.state.orders} onSelect={this.selectOrder.bind(this)}/>
                <TableFooter selectedCount={this.state.selectedCount} />
            </div>
        )
    }

    selectAll = () => {
        this.setState({
            selectedAll: !this.state.selectedAll,
            orders: this.state.orders.map(order => ({...order, selected: !this.state.selectedAll})),
            selectedCount: !this.state.selectedAll ? this.state.orders.length : 0,
        })
    }

    selectOrder = (orderId, selected) => {
        this.setState({
            selectedAll: false,
            orders: this.state.orders.map(order =>
                order.id !== orderId ? order : ({...order, selected: selected })
            ),
            selectedCount: selected ? this.state.selectedCount+1 : this.state.selectedCount-1,
        })
    }
}