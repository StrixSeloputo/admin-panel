import React, {Component} from "react";
import Button from "./common/Button";
import sun from '../resources/icons/sun.svg';
import moon from '../resources/icons/moon.svg';

class ThemeSwitcher extends Component {
    state = {
        isDay: true
    }

    render() {
        return (
            <Button className="link-padding-0"
                    icon={this.state.isDay ? sun : moon}
                    text={this.state.isDay ? "Светлая тема" : "Темная тема"}
                    onClick={this.switchTheme}/>
        )
    }

    switchTheme = () => {
        this.setState({
            isDay: !this.state.isDay
        })
    }
}

export default ThemeSwitcher;