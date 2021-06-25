import React from 'react';
import {Button} from '../../../../lib';
import refresh from '../../../../resources/icons/refresh.svg';

export const ReloadButton = () => {
    return (
        <Button className="link medium-0"
                icon={refresh}
                text="Загрузка" />
    )
}