import * as gameActions from './games.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game } from '../shared/interfaces';
import { AppAction } from '../../app/app.actions';

export interface State {
  data: Game[];
  selected: Game;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  switch (action.type) {
    case gameActions.GET_GAMES:
      return {
        ...state,
        action: gameActions.GET_GAMES,
        done: false,
        selected: null,
        error: null
      };
    case gameActions.GET_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case gameActions.GET_GAMES_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

    case gameActions.CREATE_GAME:
      return {
        ...state,
        selected: action.payload,
        action: gameActions.CREATE_GAME,
        done: false,
        error: null
      };
    case gameActions.CREATE_GAME_SUCCESS:
      {
        const newGame = {
          ...state.selected,
          id: action.payload
        };
        const data = [
          ...state.data,
          newGame
        ];
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case gameActions.CREATE_GAME_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}

// Selectors

export const getGamesState = createFeatureSelector<State>('games');
export const getAllGames = createSelector(getGamesState, (state: State) => state.data);

export const getCreateError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.CREATE_GAME
    ? state.error
    : null;
});
export const getGamesError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.GET_GAMES
    ? state.error
    : null;
});
