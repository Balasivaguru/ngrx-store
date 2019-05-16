import { Action } from '@ngrx/store';
import * as counter from './counter.actions';
 
export const initialState = 0;
 
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case counter.ActionTypes.Increment:
      return state + 1;
 
    case counter.ActionTypes.Decrement:
      return state - 1;
 
    case counter.ActionTypes.Reset:
      return 0;
 
    default:
      return state;
  }
}
