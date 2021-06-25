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
        const {icon, className = "dropdown", text, multiselect} = this.props

        const list = <>{
            this.state.source.map(elem => <Checkbox id={elem.id} key={elem.id}
                                                    label={elem.label}
                                                    selected={elem.selected}
                                                    className={!multiselect && "hidden"}
                                                    onClick={this.selectElem.bind(this, elem.id)}/>)
        }</>

        return (
            <>
                <div className="dropdown"
                     onClick={this.setModal.bind(this, true)}>
                    <Button className={className}
                            icon={icon}
                            text={!!text ? text : this.getSelectedLabels()}/>
                    {className === "dropdown" && <Icon className="input-right" icon={v_arrow}/>}
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
        if (this.props.multiselect) {
            this.setState({
                source: this.state.source.map(elem => elem['id'] === id ? {...elem, selected: !elem.selected} : elem)
            });
        } else {
            this.setState({
                source: this.state.source.map(elem => elem['id'] === id ? {...elem, selected: true} : {...elem, selected: false}),
                isModal: false
            });
        }
    }
    getSelectedLabels = () => {
        const selectedLabels = this.state.source.filter(elem => elem.selected).map(elem => elem.label).join(', ');
        if (selectedLabels === '') {
            return 'Любой';
        }
        return selectedLabels;
    }
}