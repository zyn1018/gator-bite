import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderManageComponent} from '../order-manage/order-manage.component';

const routes: Routes = [
  {path: 'restaurants/:restaurantId', component: OrderManageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule {
}
