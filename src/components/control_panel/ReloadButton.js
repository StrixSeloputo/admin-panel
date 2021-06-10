import React, {Component} from "react";
import Button from "../common/Button";

export default class ReloadButton extends Component {
    render() {
        return (
            <Button //onClick={this.props.reload}
                className="link"
                text="Загрузка" />
        )
    }
}