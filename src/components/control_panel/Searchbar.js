import React, {Component} from 'react';
import Input from "../common/Input";
import Icon from "../common/Icon";
import './Searchbar.css'
import search from '../../resources/icons/search.svg';

class Searchbar extends Component{

    render () {
        return (
            <div className="inline">
                <Icon className="input"
                      icon={search} />
                <Input className="searchbar"
                       hint={"Номер заказа или ФИО"} />
            </div>
        );
    }
}

export default Searchbar;
