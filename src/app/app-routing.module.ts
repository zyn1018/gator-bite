import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterComponent} from './core/main/center.component';
import {RestaurantsComponent} from './RestaurantsList/restaurants.component';

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
