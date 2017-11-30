import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {OrderManageComponent} from './order-manage.component';
import {MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {OrderService} from '../order.service';
import {DishService} from '../../dishes-manage/dish.service';
import {HttpModule} from '@angular/http';

describe('OrderManageComponent', () => {
  let component: OrderManageComponent;
  let fixture: ComponentFixture<OrderManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderManageComponent],
      imports: [
        MatCardModule,
        RouterModule.forRoot([]),
        HttpModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        OrderService,
        DishService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
