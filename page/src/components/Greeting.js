import React, { Component } from 'react';
import './Greeting.scss'
import Button from './Button'

class Greeting extends Component {

    render() {
        return (
            <div className="screen-greeting__greeting greeting">
                <h1 className="greeting__title">Расширяем возможности предоставления<br></br> качественных медицинских услуг</h1>
                <h2 className="greeting__subtitle">&#171;Дневник здоровья&#187; - новый сервис для самоконтроля<br></br>показателей состояния здоровья, разработанный для<br></br>участников программы &#171;Мое здоровье&#187;.</h2>
                <Button className="greeting__button button_size_s hovered button_theme_color" name="Узнать больше" />
            </div>

        )
    }
}
export default Greeting;
