import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DishFilterPipe} from './dishes-manage/dish-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
