import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, History } from 'history';
import App from '@/app/app';
import configureStore from './store';

const rootEl = document.getElementById('root');
const history: History = createBrowserHistory();
const initState = {};
const store = configureStore(initState, history);

ReactDOM.render(<App store={store} history={history} />, rootEl);
