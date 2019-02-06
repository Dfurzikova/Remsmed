import React, { Component } from 'react';
import './App.scss';
import '../fonts/fonts.scss'
import ScreenGreeting from './ScreenGreeting/ScreenGreeting'
import ScreenHealthDiary from './ScreenHealthDiary/ScreenHealthDiary'
import AppFunctions from './AppFunctions/AppFunctions'
import ScreenPersonalDiary from './ScreenPersonalDiary/ScreenPersonalDiary'
import ScreenSpecialists from './ScreenSpecialists/ScreenSpecialists'
import ScreenAccess from './ScreenAccess/ScreenAccess'
import Footer from './Footer/Footer'


const globalData = {
    appFunctions: [
        {
            title: 'Планирование графика\nприема лекарств',
            icon: require('../assets/function-icon_1.png')
        },
        {
            title: 'Уведомление врача об исполнении назначений',
            icon: require('../assets/function-icon_2.png')
        },
        {
            title: 'Ведение дневника самочувствия',
            icon: require('../assets/function-icon_3.png')
        },
        {
            title: 'Удаленное предоставление измерений врачу',
            icon: require('../assets/function-icon_4.png')
        },
        {
            title: 'Общение с врачами через встроенный мессенджер',
            icon: require('../assets/function-icon_5.png')
        },
        {
            title: 'Получение уведомлений для выполнения назначений',
            icon: require('../assets/function-icon_6.png')
        }
    ],
    personalDiaryReasons: [
        {
            title: 'Хранение данных',
            text: 'Контролируйте и следите за динамикой изменения показателей вашего здоровья. Вносите результаты измерений медицинских показателей вручную или с помощью интегрированных приборов, храните историю измерений и отслеживайте динамику состояния здоровья'
        },
        {
            title: 'Сообшение информации врачу',
            text: 'Позвольте специалисту дистанционно следить за вашим здоровьем. Будьте на связи со специалистом - отправляйте информацию о своем самочувствии, обменивайтесь сообщениями и получайте рекомендации по вашему здоровью и лечению.'
        },
        {
            title: 'Напоминание о важном',
            text: 'Получайте рекомендации, созданные специально для вас. Система, персонально настроенная под ваши требования, автоматически напомнит о необходимости выполнить рекомендации медицинского специалиста: принять препарат или выполнить измерения.'
        }
    ],
    specialists: [
        {text: 'Дистанционный контроль состояния здоровья ваших пациентов'},
        {text: 'Наблюдение за динамикой изменения основных медицинских показателей '},
        {text: 'Наличие алгоритмов автоматического анализа поступающей информации'},
        {text: 'Индивидуальная система уведомлений об изменении состояния каждого пациента'},
        {text: 'Дополнительный сервис коммуникации, позволяющий активно вовлекать пациента в процесс профилактики, лечения и реабилитации.'}
    ]
};

class App extends Component {
    render() {
        return (
            <div className="app">
                <ScreenGreeting />
                <ScreenHealthDiary />
                <AppFunctions functions={globalData.appFunctions} />
                <ScreenPersonalDiary reasons={globalData.personalDiaryReasons}/>
                <ScreenSpecialists  specialists={globalData.specialists}/>
                <ScreenAccess />
                <Footer />

            </div>
        );
    }
}

export default App;
