import { Component, OnInit } from '@angular/core';
import { Game } from '../../../shared/interfaces';
import { DataService } from '../../../core/data.service';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { AddGame } from '../../../store/games.actions';
import moment from 'moment';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  game = {} as Game;
  games: Game[];
  constructor(
    private store: Store<Game>
  ) { }

  ngOnInit() { }

  onSubmit() {
    const gameData = this.game;
    this.game.dateOfCompletion === undefined ?
      gameData.dateOfCompletion = 'Not completed' :
      gameData.dateOfCompletion = this.transformDateOfCompletion(this.game.dateOfCompletion);
    gameData.gameAge = moment(this.game.year, 'YYYY').fromNow();
    // this.dataService.insertGame(gameData);
    this.store.dispatch(new AddGame(gameData));
  }

  changeCompletedStatus(event: boolean) {
    this.game.completed = event;
    this.game.completed ?
      this.game.dateOfCompletion = this.game.dateOfCompletion = 'Not Completed' :
      this.game.dateOfCompletion = null;
  }

  transformDateOfCompletion(date: any) {
    return date.toString().substring(4, 16);
  }
}
