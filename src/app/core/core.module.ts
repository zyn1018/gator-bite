import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CenterComponent} from './main/center.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CenterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    SharedModule,
  ]
})
export class CoreModule {
  constuctor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Module already exists!!!');
    }
  }
}

