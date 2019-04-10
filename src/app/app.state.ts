import * as games from './store/games.reducers';

export interface AppState {
  games: games.State;
}
