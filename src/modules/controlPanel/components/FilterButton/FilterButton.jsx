import React from 'react';
import {Button} from '../../../../lib';
import filter from '../../../../resources/icons/filter.svg';

export const FilterButton = (props) => {
    return (
        <Button className={props.isFilterOpen ? "blue medium" : "link medium"}
                icon={filter}
                text="Фильтры"
                onClick={props.switchFilter} />
    )
}