export const themeActionTypes = {
    SET_THEME: 'THEME.SET_THEME',
    OPEN_MODAL: 'THEME.OPEN_MODAL',
    CLOSE_MODAL: 'THEME.CLOSE_MODAL'
}

export const themeActions = {
    setTheme: (payload) => ({ type: themeActionTypes.SET_THEME, payload }),
    openThemeModal: () => ({type: themeActionTypes.OPEN_MODAL}),
    closeThemeModal: (payload) => ({type: themeActionTypes.CLOSE_MODAL, payload})
}