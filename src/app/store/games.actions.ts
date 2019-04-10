import { Action } from '@ngrx/store';
import { Game } from '../shared/interfaces';

export const GET_GAMES = '[ALL] Games';
export const GET_GAMES_SUCCESS = '[ALL] Games Success';
export const GET_GAMES_ERROR = '[ALL] Games Error';

export const CREATE_GAME = '[CREATE] Game';
export const CREATE_GAME_SUCCESS = '[CREATE] Game Success';
export const CREATE_GAME_ERROR = '[CREATE] Game Error';



export class GetAllGames implements Action {
  readonly type = GET_GAMES;
}

export class GetAllGamesSuccess implements Action {
  readonly type = GET_GAMES_SUCCESS;

  constructor(public payload: Game[]) {
  }
}

export class GetAllGamesError implements Action {
  readonly type = GET_GAMES_ERROR;

  constructor(public payload: Error) {
  }
}

export class AddGame implements Action {
  readonly type = CREATE_GAME;

  constructor(public payload: Game) {
  }
}

export class AddGameSuccess implements Action {
  readonly type = CREATE_GAME_SUCCESS;

  constructor(public payload: number) {
  }
}

export class AddGameError implements Action {
  readonly type = CREATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}


