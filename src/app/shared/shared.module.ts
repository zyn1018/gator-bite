import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdToolbarModule, MdButtonModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule
  ],
  declarations: []
})
export class SharedModule { }
