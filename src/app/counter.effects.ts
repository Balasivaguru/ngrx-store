import { HttpClient } from '@angular/common//http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';


@Injectable()
export class SavedConfigsEffects {
  @Effect()
  loadConfigs$ = this.actions$.pipe(
    ofType('[home page] saved configs'),
    mergeMap(() =>
      this.http.get('http://localhost:3000/saved-configs').pipe(
        map(configs => ({
          type: '[home page] saved configs',
          payload: configs,
        })),
        catchError(() => of({ type: '[API] failure' })),
      ),
    ),
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
