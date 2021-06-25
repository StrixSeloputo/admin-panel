import {profileActionTypes} from "./actions";

const initialState = {
    profile: null,
    theme: 'light'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case profileActionTypes.SET_PROFILE:
            return {...state, profile: action.payload };

        case profileActionTypes.SET_THEME:
            return {...state, theme: action.payload};

        default:
            return state;
    }
}