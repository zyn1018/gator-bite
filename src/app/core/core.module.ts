import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CenterComponent} from './main/center.component';
import {SharedModule} from '../shared/shared.module';
import {RestaurantsComponent} from '../restaurantsList/restaurants.component';
import {RestaurantService} from '../restaurantsList/restaurant.service';
import {AppRoutingModule} from '../app-routing.module';
import {LoginRoutingModule} from '../login/login-routing.module';
import {LoginComponent} from '../login/login/login.component';
import {ResearchComponent} from '../research/research.component';
@NgModule({
  imports: [
    CommonModule, SharedModule, LoginRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    RestaurantsComponent,
    LoginComponent,
    ResearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    SharedModule,
    RestaurantsComponent,
    LoginRoutingModule,
    ResearchComponent
  ],
  providers: [
    RestaurantService
  ]
})
export class CoreModule {
  constuctor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Module already exists!!!');
    }
  }
}

