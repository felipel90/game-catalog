import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './home-routing.module';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeFormComponent } from './home-card/home-form/home-form.component';
import { CustomMaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { StoreModule, ActionReducerMap, Store } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { GameEffects } from '../store/games.effects';
import * as gameReducer from '../store/games.reducers';
import { DataService } from '../core/data.service';



export const reducers: ActionReducerMap<any> = {
  games: gameReducer.reducer
};

@NgModule({
  declarations: [HomeComponent, HomeCardComponent, HomeFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GameEffects])
  ],
  providers: [DataService, Actions]
})
export class HomeModule { }
