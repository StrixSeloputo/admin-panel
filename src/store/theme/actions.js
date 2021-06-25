export const themeActionTypes = {
    SET_THEME: 'THEME.SET_THEME'
}

export const themeActions = {
    setTheme: (payload) => ({ type: themeActionTypes.SET_THEME, payload })
}