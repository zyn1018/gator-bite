import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterComponent} from './core/main/center.component';
import {RestaurantsComponent} from './restaurantsList/restaurants.component';
import {DishesManageComponent} from './dishes-manage/dishes-manage.component';
import {DishFormComponent} from './dish-form/dish-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CenterComponent},
  {path: 'restaurants', component: RestaurantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
