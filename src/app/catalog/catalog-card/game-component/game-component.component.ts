import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../shared/interfaces';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  @Input() games: Game[];

  ngOnInit() {
  }

}
