import React from 'react';
import {Button, Modal, Text} from "../../../../lib";
import {themeActions, themes} from "../../../../store/theme";
import {useDispatch, useSelector} from "react-redux";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();

    const switchTheme = (theme) => () => dispatch(themeActions.setTheme(theme));
    const openThemeModal = () => dispatch(themeActions.openThemeModal());
    const closeThemeModal = () => dispatch(themeActions.closeThemeModal());

    const {theme, isThemeModal} = useSelector((state) => state.theme);
    const {icon, label} = theme;
    const text = label+' тема';
    return (
        <>
            <Button className="link medium-0"
                    icon={icon}
                    text={text}
                    onClick={openThemeModal}/>
            <Modal
                visible={isThemeModal}
                header={<Text text="Выберите тему"/>}
                content={
                    <>
                        {
                            themes.map(theme => <Button className="link"
                                                        icon={theme.icon}
                                                        text={theme.label}
                                                        key={theme.id}
                                                        onClick={switchTheme(theme)}/>)
                        }
                    </>
                }
                positionAround={this}
                onClose={closeThemeModal}
            />
        </>
    )

}