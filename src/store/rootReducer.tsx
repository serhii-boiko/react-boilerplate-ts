import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as Settings from '@/app/Settings';
import * as Example from '@/app/Example';
import { State as ExampleState } from '@/app/Example/interfaces';
import { State as SettingsState } from '@/app/Settings/interfaces';
import { History } from 'history';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [Example.constants.NAME]: Example.reducer,
    [Settings.constants.NAME]: Settings.reducer,
  });

export interface Store {
  [Example.constants.NAME]: ExampleState;
  [Settings.constants.NAME]: SettingsState;
}
