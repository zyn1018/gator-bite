import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {LoginRoutingModule} from './login-routing.module';
import {AlertComponent} from '../alert/alert.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {
}
