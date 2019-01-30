import React, { Component } from 'react';
import './ScreenHealthDiary.scss'
import Button from '../Button/Button'

class ScreenHealthDiary extends Component {
    render() {
        return (
            <div className="health-diary">
                <div className="health-diary__background">
                    <div className="health-diary__content">
                        <div className="health-diary__mobile-image"> </div>
                        <div className="health-diary__health-diary-information health-diary-information">
                            <h1 className="health-diary-information__title">Что такое &#171;Дневник здоровья&#187;?</h1>
                            <p className="health-diary-information__subtitle">Дневник пациента &#8212; это удобный онлайн сервис:</p>
                            <ul className="health-diary-information__list">
                                <li>Вносите результаты измерений вручную или с помощью <br></br>интегрированных приборов</li>
                                <li>Ведите персональную медицинскую карту с историей<br></br> ваших измерений</li>
                                <li>Делитесь результатами измерений со специалистами<br></br> для повышения эффективности лечения</li>
                                <li>Получайте рекомендации, созданные специально для вас</li>
                            </ul>
                            <Button className="health-diary-information__button button_size_m button_theme_color" name="Оставить заявку" />
                        </div>
                    </div>
                    <div className="health-diary__graph"></div>
                </div>
            </div>
        )
    }
}
export default ScreenHealthDiary;
