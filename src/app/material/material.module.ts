import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CustomMaterialModule { }
