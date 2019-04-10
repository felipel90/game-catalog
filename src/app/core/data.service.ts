import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Game } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
  // tslint:disable-next-line:no-inferrable-types
  constructor(private db: AngularFireDatabase) { }
  getAllGames() {
    return this.db.list('games').valueChanges();
  }

  insertGame(game: Game) {
    this.db.list('games').push(game)
      .then(response => {
        console.log(response);
      }).catch(error => console.log(error));
  }

}
