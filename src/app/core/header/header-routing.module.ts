import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {User} from '../../domain/user.service';

const routes: Routes = [
  {path: 'login', component: User},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

