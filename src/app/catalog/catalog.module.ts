import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CustomMaterialModule } from '../material/material.module';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { GameComponent } from './catalog-card/game-component/game-component.component';
import { FilterGamesListComponent } from './catalog-card/filter-games-list.component';
import { FormsModule } from '@angular/forms';

import { StoreModule, ActionReducerMap, Store } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { GameEffects } from '../store/games.effects';
import * as gameReducer from '../store/games.reducers';
import { DataService } from '../core/data.service';

export const reducers: ActionReducerMap<any> = {
  games: gameReducer.reducer
};

@NgModule({
  declarations: [CatalogComponent, CatalogCardComponent, GameComponent, FilterGamesListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    CatalogRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GameEffects])
  ],
  providers: [
    DataService,
    Actions
  ]
})
export class CatalogModule { }
