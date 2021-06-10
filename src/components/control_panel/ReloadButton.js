import React, {Component} from "react";
import Button from "../common/Button";
import refresh from '../../resources/icons/refresh.svg';

export default class ReloadButton extends Component {
    render() {
        return (
            <Button className="link padding-8-0"
                    icon={refresh}
                    text="Загрузка" />
        )
    }
}