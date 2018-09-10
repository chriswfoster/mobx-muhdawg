import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react'
import BirdStore from './stores/BirdStore'
import UserStore from './stores/UserStore'

//allows us to access our birdstore in an easy way.
const Root = (
    <Provider BirdStore = {BirdStore} UserStore = {UserStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
