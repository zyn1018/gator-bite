import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CenterComponent} from './main/center.component';
import {SharedModule} from '../shared/shared.module';
import {RestaurantsComponent} from '../restaurantsList/restaurants.component';
import {RestaurantService} from '../restaurantsList/restaurant.service';
import {LoginRoutingModule} from '../login/login-routing.module';
import {LoginComponent} from '../login/login/login.component';
import {SignupRoutingModule} from '../signup/signup-routing.module';
import {SignupComponent} from '../signup/signup/signup.component';
import {ResearchComponent} from '../research/research.component';
import {DishService} from '../dishes-manage/dish.service';
import {DishesManageComponent} from '../dishes-manage/dishes-manage.component';
import {OrderManageComponent} from '../order-manage/order-manage.component';
import {DishFormComponent} from '../dish-form/dish-form.component';
import {DishFormRoutingModule} from '../dish-form/dish-form-routing.module';
import {DishesManageRoutingModule} from '../dishes-manage/dishes-manage-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DishFilterPipe} from '../dishes-manage/dish-filter.pipe';

@NgModule({
  imports: [
    CommonModule, SharedModule, LoginRoutingModule, SignupRoutingModule, DishFormRoutingModule, DishesManageRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    RestaurantsComponent,
    LoginComponent,
    ResearchComponent,
    SignupComponent,
    DishesManageComponent,
    OrderManageComponent,
    DishFormComponent,
    DishFilterPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    SharedModule,
    RestaurantsComponent,
    LoginRoutingModule,
    ResearchComponent,
    SignupRoutingModule,
    DishesManageComponent,
    OrderManageComponent,
    DishFormComponent,
    DishFormRoutingModule,
    DishesManageRoutingModule
  ],
  providers: [
    RestaurantService, DishService
  ]
})
export class CoreModule {
  constuctor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Module already exists!!!');
    }
  }
}

