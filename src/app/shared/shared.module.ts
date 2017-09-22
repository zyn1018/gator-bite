import { NgModule } from '@angular/core';
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdGridListModule, MdIconModule} from '@angular/material';
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
    MdIconModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule
  ],
  declarations: []
})
export class SharedModule { }
