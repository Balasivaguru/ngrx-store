import { Action } from '@ngrx/store';
import * as counter from './counter.actions';
 
export const initialState :string= '';
 
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
 case counter.ActionTypes.SavedConfigs
 :
console.log(state,action)
return {
  state:'ssf',

 }

    default:
      return state;
  }
}
