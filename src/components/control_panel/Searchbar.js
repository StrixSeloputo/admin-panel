import React, {Component} from 'react';
import Input from "../common/Input";
import search from '../../resources/icons/search.svg';

export default class Searchbar extends Component{

    render () {
        return (
            <Input className="width-320" //todo margin-right-8
                   icon={search}
                   hint={"Номер заказа или ФИО"} />
        );
    }
}