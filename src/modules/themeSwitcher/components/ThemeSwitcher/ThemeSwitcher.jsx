import React, {Component} from 'react';
import {Button, Modal, Text} from "../../../../lib";
import {getDefaultTheme, themes} from "../../../../store/theme";

// import { useDispatch } from "react-redux";

export class ThemeSwitcher extends Component {
    /*
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const btn = event.currentTarget;

        const theme = {
            btn = bt
        }
    }
    */

    state = {
        theme: getDefaultTheme(),
        isModal: false
    }

    render() {
        const {icon, label} = this.state.theme;
        const text = label+' тема';
        return (
            <>
                <Button className="link medium-0"
                        icon={icon}
                        text={text}
                        onClick={this.setModal.bind(this, true)}/>
                <Modal
                    visible={this.state.isModal}
                    header={<Text text="Выберите тему"/>}
                    content={
                        <>
                            {
                                themes.map(theme => <Button className="link"
                                                            icon={theme.icon}
                                                            text={theme.label}
                                                            key={theme.id}
                                                            onClick={this.switchTheme.bind(this, theme)} />)
                            }
                        </>
                    }
                    positionAround={this}
                    onClose={this.setModal.bind(this, false)}
                />
            </>
        )
    }

    switchTheme = (theme) => {
        this.setState({theme, isModal: false});
    }

    setModal = (isModal) => {
        this.setState({isModal})
    }
}