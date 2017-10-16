import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishFormComponent} from './dish-form.component';

const routes: Routes = [
  {path: 'dishes/:email/:dishId', component: DishFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishFormRoutingModule {
}
