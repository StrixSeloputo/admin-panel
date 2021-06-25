import sun from '../../resources/icons/sun.svg';
import moon from '../../resources/icons/moon.svg';

export * from "./actions";

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

export const getThemeById = (id) => {
    return themes.filter(theme => theme['id'] === id)[0];
}

export const getDefaultTheme = () => {
    return themes[0];
}