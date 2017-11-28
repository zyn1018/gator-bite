import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RaccountComponent} from './raccount/raccount.component';
import {RaddressComponent} from './raddress/raddress.component';
import {RordersComponent} from './rorders/rorders.component';
import {RpaymentComponent} from './rpayment/rpayment.component';
import {RprofileComponent} from './rprofile/rprofile.component';
import {RtogetherComponent} from './rtogether/rtogether.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RaccountComponent,
    RaddressComponent,
    RordersComponent,
    RpaymentComponent,
    RprofileComponent,
    RtogetherComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    RaccountComponent,
    RaddressComponent,
    RordersComponent,
    RpaymentComponent,
    RprofileComponent,
    RtogetherComponent
  ]
})
export class RestaurantModule {
}
