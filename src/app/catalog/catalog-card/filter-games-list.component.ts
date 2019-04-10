import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-games-list',
  templateUrl: './filter-games-list.component.html',
  styleUrls: ['./filter-games-list.component.scss']
})



export class FilterGamesListComponent {
  // tslint:disable-next-line:variable-name
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
