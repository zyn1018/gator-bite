import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RaccountComponent} from './raccount/raccount.component';
import {RaddressComponent} from './raddress/raddress.component';
import {RordersComponent} from './rorders/rorders.component';
import {RprofileComponent} from './rprofile/rprofile.component';
import {RtogetherComponent} from './rtogether/rtogether.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RaccountComponent,
    RaddressComponent,
    RordersComponent,
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
    RprofileComponent,
    RtogetherComponent
  ]
})
export class RestaurantModule {
}
