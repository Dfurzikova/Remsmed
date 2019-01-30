import React, { Component } from 'react';
import './AppFunctions.scss'
import Section from '../Section/Section'
import icon_1 from '../../assets/function-icon_1.png'
import icon_2 from '../../assets/function-icon_2.png'
import icon_3 from '../../assets/function-icon_3.png'
import icon_4 from '../../assets/function-icon_4.png'
import icon_5 from '../../assets/function-icon_5.png'
import icon_6 from '../../assets/function-icon_6.png'



class AppFunctions extends Component {

    render() {
        return (
            <Section id="app-functions">
                <div className="app-functions__content">
                    <h1 className="app-functions__title">Функции приложения</h1>
                    <div className="app-functions__functions functions">

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_1} />
                            </div>
                            <div className="functions__text">Планирование графика<br></br>приема лекарств</div>
                        </div>

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_2} />
                            </div>
                            <div className="functions__text">Уведомление врача<br></br>об исполнении назначений</div>
                        </div>

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_3} />
                            </div>
                            <div className="functions__text">Ведение дневника<br></br>самочувствия</div>
                        </div>

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_4} />
                            </div>
                            <div className="functions__text">Удаленное предоставление<br></br>измерений врачу</div>
                        </div>

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_5} />
                            </div>
                            <div className="functions__text">Общение с врачами<br></br>через встроенный мессенджер</div>
                        </div>

                        <div className="functions__item">
                            <div className="functions__logo">
                                <img className="functions_icon" alt="image" src={icon_6} />
                            </div>
                            <div className="functions__text">Получение уведомлений<br></br>для выполнения назначений</div>
                        </div>

                    </div>
                </div>
            </Section>
        )
    }
}
export default AppFunctions;
