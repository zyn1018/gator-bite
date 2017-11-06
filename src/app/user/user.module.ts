import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { TogetherComponent } from './together/together.component';
import {SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import {RouterModule} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';

@NgModule({
  declarations: [
    AccountComponent,
    TogetherComponent,
    ProfileComponent,
    AddressComponent,
    PaymentComponent,
    OrdersComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    AccountComponent,
    TogetherComponent,
    ProfileComponent,
    AddressComponent,
    PaymentComponent,
    OrdersComponent,
  ]
})
export class UserModule { }
