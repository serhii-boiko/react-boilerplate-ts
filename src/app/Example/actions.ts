import { ADD, ADD_SUCCESS, REMOVE, REMOVE_SUCCESS } from './actionTypes';
import { TypeAction } from './interfaces';

export const add = (): TypeAction => ({
  type: ADD,
});

export const addSuccess = (): TypeAction => ({
  type: ADD_SUCCESS,
});

export const remove = (): TypeAction => ({
  type: REMOVE,
});

export const removeSuccess = (): TypeAction => ({
  type: REMOVE_SUCCESS,
});

export type Action = TypeAction;
