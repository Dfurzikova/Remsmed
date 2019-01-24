import React, { Component } from 'react';
import './App.scss';
import '../fonts/fonts.scss'

import ScreenGreeting from './ScreenGreeting'
import ScreenHealthDiary from './ScreenHealthDiary'
import AppFunctions from './AppFunctions'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ScreenGreeting />
                <ScreenHealthDiary />
                <AppFunctions />
            </div>
        );
    }
}

export default App;
