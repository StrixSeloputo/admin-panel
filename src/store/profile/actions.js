export const profileActionTypes = {
    SET_PROFILE: 'PROFILE.SET_PROFILE',
    SET_THEME: 'PROFILE.SET_THEME'
}

export const profileActions = {
    setProfile: (payload) => ({ type: profileActionTypes.SET_PROFILE, payload }),
    setTheme: (payload) => ({ type: profileActionTypes.SET_THEME, payload })
}