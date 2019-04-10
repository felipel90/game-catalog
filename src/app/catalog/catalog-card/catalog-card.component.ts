import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.state';
import { Observable } from 'rxjs';
import * as gameActions from '../../store/games.actions';
import { getAllGames } from '../../store/games.reducers';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})

export class CatalogCardComponent implements OnInit {
    // tslint:disable-next-line:variable-name
  private _games: Game[] = [];
  @Input() get games(): Game[] {
    return this._games;
  }
  set games(value: Game[]) {
    if (value) {
      this.filteredGames = this._games = value;
    }
  }
  filteredGames: Game[] = [];
  constructor(private dataService: DataService, private store: Store<AppState>) {}

  ngOnInit() {
    const self = this;
    this.dataService.getAllGames()
      .subscribe((games: Game[]) => {
        self.games = games;
        this.store.select(getAllGames);
      });
  }

  filter(data: string) {
    if (data) {
      this.filteredGames = this.games.filter((game: Game) => {
        return game.title.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          game.year.toString().indexOf(data.toLowerCase()) > -1 ||
          game.dateOfCompletion.toLowerCase().indexOf(data) > -1;
      });
    } else {
      this.filteredGames = this.games;
    }
  }

}
