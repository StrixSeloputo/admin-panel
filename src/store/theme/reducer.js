import {themeActionTypes} from "./actions";
import sun from "../../resources/icons/sun.svg";
import moon from "../../resources/icons/moon.svg";

export const themes = [
    {
        id: 'THEME.LIGHT',
        icon: sun,
        label: 'Светлая'
    },
    {
        id: 'THEME.DARK',
        icon: moon,
        label: 'Темная'
    }
]

const initialState = {
    theme: themes[0],
    isThemeModal: false
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case themeActionTypes.SET_THEME:
            return {...state,
                theme: action.payload,
                isThemeModal: false};

        case themeActionTypes.OPEN_MODAL:
            return {...state,
                isThemeModal: true};

        case themeActionTypes.CLOSE_MODAL:
            return {...state,
                isThemeModal: false};

        default:
            return state;
    }
}