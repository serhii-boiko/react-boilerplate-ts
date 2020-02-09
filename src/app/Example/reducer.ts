import { ADD_SUCCESS, REMOVE_SUCCESS } from './actionTypes';
import { createReducer } from '@/common/utils/store';
import { State } from './interfaces';
import { Action } from './actions';
import { reHydrateState } from '@/store/middleware/localstore';

const defaultState = {
  value: 0,
};

const initState = reHydrateState(defaultState, {
  value: (initialState: any, value: number) => {
    initialState.value = value;

    return initialState;
  },
});

const reducer = {
  [REMOVE_SUCCESS]: (state: State) => ({ ...state, value: state.value - 1 }),
  [ADD_SUCCESS]: (state: State) => ({ ...state, value: state.value + 1 }),
};

export default (state: State = initState, action: Action): State =>
  createReducer(reducer, state, action);
