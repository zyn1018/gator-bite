import {NgModule} from '@angular/core';
import {DishListComponent} from './dish-list/dish-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DishListComponent]
})
export class OrderModule {
}
