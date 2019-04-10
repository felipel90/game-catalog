import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CustomMaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  exports: [ NavMenuComponent ]
})
export class SharedModule { }
