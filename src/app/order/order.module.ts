import {NgModule} from '@angular/core';
import {OrderManageComponent} from './order-manage/order-manage.component';
import {SharedModule} from '../shared/shared.module';
import {OrderSidebarComponent} from './order-sidebar/order-sidebar.component';
import {OrderService} from './order.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    OrderManageComponent,
    OrderSidebarComponent
  ],
  exports: [
    OrderManageComponent,
    OrderSidebarComponent
  ],
  providers: []
})
export class OrderModule {
}
