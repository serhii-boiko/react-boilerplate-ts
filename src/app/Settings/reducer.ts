import { SWITCH_LANGUAGE } from './actionTypes';
import { createReducer } from '@/common/utils/store';
import { Action } from './actions';
import { State } from './interfaces';

const initState = {
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
};

const reducer = {
  [SWITCH_LANGUAGE]: (state: State, action: any) => ({ ...state, locale: action.payload }),
};

export default (state: State = initState, action: Action): State =>
  createReducer(reducer, state, action);
