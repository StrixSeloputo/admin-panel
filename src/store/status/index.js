import abort from '../../resources/icons/abort.svg';
import checkmark from '../../resources/icons/checkmark.svg';
import dot from '../../resources/icons/dot.svg';

export const statuses = [
    {
        id: 'STATUS.NEW',
        icon: dot,
        color: 'orange',
        label: 'Новый'
    },
    {
        id: 'STATUS.CALCULATION',
        icon: dot,
        color: 'blue',
        label: 'Рассчет'
    },{
        id: 'STATUS.CONFIRMED',
        icon: dot,
        color: 'blue',
        label: 'Подтвержден'
    },{
        id: 'STATUS.DEFERRED',
        icon: dot,
        color: 'orange',
        label: 'Отложен'
    },{
        id: 'STATUS.DONE',
        icon: checkmark,
        color: 'green',
        isFinal: true,
        label: 'Выполнен'
    },{
        id: 'STATUS.CANCELLED',
        icon: abort,
        color: 'black',
        isFinal: true,
        label: 'Отменен'
    }
]

export const getStatusById = (id) => {
    return statuses.filter(status => status['id'] === id)[0];
}

export const getDefaultStatus = () => {
    return statuses[0];
}