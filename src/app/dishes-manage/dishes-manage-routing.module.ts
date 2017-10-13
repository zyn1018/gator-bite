import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesManageComponent} from './dishes-manage.component';

const routes: Routes = [
  {path: 'dishes', component: DishesManageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesManageRoutingModule {
}
