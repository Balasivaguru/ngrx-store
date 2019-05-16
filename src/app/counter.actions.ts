import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  SavedConfigs = '[Home Page] API' 
}
 
export class SavedConfigs implements Action {
  readonly type = ActionTypes.SavedConfigs;
}

export type state= SavedConfigs;