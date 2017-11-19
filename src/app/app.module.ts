import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DishFilterPipe} from './dishes-manage/dish-filter.pipe';
import {HttpClientModule} from '@angular/common/http';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
