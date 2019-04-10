import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import * as gameActions from './games.actions';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  AddGame, AddGameError, AddGameSuccess,
  GetAllGamesError, GetAllGamesSuccess,
} from './games.actions';
import { DataService } from '../core/data.service';
import { Game } from '../shared/interfaces';
import { getAllGames } from './games.reducers';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private dataService: DataService) {
  }

  @Effect()
  getAllGames$: Observable<Action> = this.actions$
    .pipe(
      ofType(gameActions.GET_GAMES),
      switchMap(() => this.dataService.getAllGames()),
      map(games => new gameActions.GetAllGames()),
      catchError((err) => [new GetAllGamesError(err)])
    );

  @Effect()
  createGame$ = this.actions$
    .pipe(
      ofType(gameActions.CREATE_GAME),
      map((action: AddGame) => action.payload),
      switchMap(newGame => Observable.throw(this.dataService.insertGame(newGame))),
      map((response) => new AddGameSuccess(response)),
      catchError((err) => [new AddGameError(err)])
    );


}
