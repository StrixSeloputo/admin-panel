import React, {Component} from "react";
import './style.css';
import v_arrow from '../../../resources/icons/v_arrow.svg';
import {Button, Checkbox, Icon, Modal} from '..';

export class Dropdown extends Component {
    state = {
        source: this.props.source,
        isModal: false
    }

    render() {
        const list = <>{
            !this.props.multiselect ?
                this.state.source.map(elem => <Button key={elem.id}
                                                      text={elem.label}
                                                      onClick={this.setModal.bind(this, false)}/>) :
                this.state.source.map(elem => <Checkbox id={elem.id} key={elem.id}
                                                        label={elem.label}
                                                        selected={elem.selected}
                                                        onClick={this.selectElem.bind(this, elem.id)}/>)
        }</>

        return (
            <>
                <div className="dropdown"
                     onClick={this.setModal.bind(this, true)}>
                    <Button className="dropdown"
                            text={this.getSelectedLabels()}/>
                    <Icon className="input-right"
                          icon={v_arrow}/>
                </div>
                <Modal
                    visible={this.state.isModal}
                    content={list}
                    onClose={this.setModal.bind(this, false)}
                />
            </>
        )
    }

    setModal = (isModal) => {
        this.setState({isModal});
    }
    selectElem = (id) => {
        this.setState({
            source: this.state.source.map(elem => elem['id'] === id ? {...elem, selected: !elem.selected} : elem)
        });
    }
    getSelectedLabels = () => {
        const selectedLabels = this.state.source.filter(elem => elem.selected).map(elem => elem.label).join(', ');
        if (selectedLabels === '') {
            return 'Любой';
        }
        return selectedLabels;
    }
}