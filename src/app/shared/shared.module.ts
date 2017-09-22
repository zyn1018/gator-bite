import { NgModule } from '@angular/core';
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdGridListModule, MatChipsModule} from '@angular/material';
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
    MatChipsModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MatChipsModule
  ],
  declarations: []
})
export class SharedModule { }
