import React from 'react';
import '../../../../style.css';
import {Input} from '../../../../lib';
import search from '../../../../resources/icons/search.svg';

export const Searchbar = () => {
    return (
        <Input className="width-320" //todo margin-right-8
               icon={search}
               hint={"Номер заказа или ФИО"} />
    );
}