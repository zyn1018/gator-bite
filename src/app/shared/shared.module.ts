import { NgModule } from '@angular/core';
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule
  ],
  declarations: []
})
export class SharedModule { }
