import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TogetherComponent} from '../../user/together/together.component';
import {ProfileComponent} from '../../user/profile/profile.component';
import {AddressComponent} from '../../user/address/address.component';
import {PaymentComponent} from '../../user/payment/payment.component';
import {OrdersComponent} from '../../user/orders/orders.component';
import {RtogetherComponent} from '../../restaurant/rtogether/rtogether.component';
import {RprofileComponent} from '../../restaurant/rprofile/rprofile.component';
import {RaddressComponent} from '../../restaurant/raddress/raddress.component';
import {RordersComponent} from '../../restaurant/rorders/rorders.component';

const routes: Routes = [
  {
    path: 'user/:userid', component: TogetherComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'address', component: AddressComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'orders', component: OrdersComponent}
    ],
  },
  {
    path: 'restaurantInfo/:userid', component: RtogetherComponent,
    children: [
      {path: '', component: RprofileComponent},
      {path: 'restaurantProfile', component: RprofileComponent},
      {path: 'restaurantAddress', component: RaddressComponent},
      {path: 'restaurantOrders', component: RordersComponent}
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {
}

