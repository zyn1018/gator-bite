import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdGridListModule,
  MdIconModule,
  MatChipsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MatChipsModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MatChipsModule
  ],
  declarations: []
})
export class SharedModule { }
