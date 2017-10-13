import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdGridListModule,
  MdIconModule,
  MatChipsModule,
  MatRadioModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  declarations: []
})
export class SharedModule { }
