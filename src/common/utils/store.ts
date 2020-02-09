/* Reducer build to avoid giant switch */
export const createReducer = (reducer: any, state: any, action: any) =>
  reducer[action.type] ? reducer[action.type](state, action) : state;
