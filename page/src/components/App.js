import React, { Component } from 'react';
import './App.scss';
import '../fonts/fonts.scss'

import ScreenGreeting from './ScreenGreeting/ScreenGreeting'
import ScreenHealthDiary from './ScreenHealthDiary/ScreenHealthDiary'
import AppFunctions from './AppFunctions/AppFunctions'

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
