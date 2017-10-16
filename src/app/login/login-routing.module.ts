import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DishesManageComponent} from '../dishes-manage/dishes-manage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dishes', component: DishesManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

