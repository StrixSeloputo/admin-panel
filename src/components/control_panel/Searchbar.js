import React, {Component} from 'react';
import './Searchbar.css';
import Input from "../common/Input";

class Searchbar extends Component{

    render () {
        return (
            <div className="searchbar">
                <Input hint={"Номер заказа или ФИО"} />
            </div>
        );
    }
}

export default Searchbar;
