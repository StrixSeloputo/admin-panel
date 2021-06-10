import React, {Component} from "react";
import Button from "./common/Button";

class ThemeSwitcher extends Component {
    state = {
        isDay: true
    }

    render() {
        return (

            <Button onClick={this.switchTheme}
                    className="link"
                    text={this.state.isDay ? "Светлая тема" : "Темная тема"} />
        )
    }

    switchTheme = () => {
        this.setState({
            isDay: !this.state.isDay
        })
    }
}

export default ThemeSwitcher;