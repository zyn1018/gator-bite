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
import {DishFormComponent} from '../dish-form/dish-form.component';
import {DishFormRoutingModule} from '../dish-form/dish-form-routing.module';
import {DishesManageRoutingModule} from '../dishes-manage/dishes-manage-routing.module';
import {DishFilterPipe} from '../dishes-manage/dish-filter.pipe';
import {UserService} from '../domain/user.service';
import {RestaurantsRoutingModule} from '../restaurantsList/restaurants-routing.module';
import {OrderModule} from '../order/order.module';
import {OrderService} from '../order/order.service';
import {UserModule} from '../user/user.module';
import {HeaderRoutingModule} from './header/header-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CustomHttp} from '../utils/customHttp';
import {AuthGuard} from '../utils/AuthGuard';
import {AuthenticationService} from '../utils/authentication.service';
import {AlertService} from '../utils/Alert.Service';
import {AlertComponent} from '../alert/alert.component';
import {RestaurantModule} from '../restaurant/restaurant.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    SignupRoutingModule,
    DishFormRoutingModule,
    DishesManageRoutingModule,
    RestaurantsRoutingModule,
    OrderModule,
    RestaurantsRoutingModule,
    UserModule,
    HeaderRoutingModule,
    HttpClientModule,
    RestaurantModule,
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
    DishFormComponent,
    DishFilterPipe,
    AlertComponent
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
    DishFormComponent,
    DishFormRoutingModule,
    DishesManageRoutingModule,
    OrderModule,
    HeaderRoutingModule,
    AlertComponent
  ],
  providers: [
    RestaurantService, DishService, UserService, OrderService, HttpClient,
    CustomHttp, AuthGuard, AuthenticationService, AlertService
  ]
})
export class CoreModule {
  constuctor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Module already exists!!!');
    }
  }
}

