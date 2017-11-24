/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';

import './tictactoe/style.css';
import configureStore from './tictactoe/configureStore';
import GameContainer from './tictactoe/GameContainer';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <GameContainer />
    </Provider>
);

export default App;