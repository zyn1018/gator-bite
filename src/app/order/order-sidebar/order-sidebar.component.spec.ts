import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderSidebarComponent} from './order-sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material';
import {OrderService} from '../order.service';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {DishService} from '../../dishes-manage/dish.service';

describe('OrderSidebarComponent', () => {
  let component: OrderSidebarComponent;
  let fixture: ComponentFixture<OrderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatListModule,
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [OrderSidebarComponent],
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
    fixture = TestBed.createComponent(OrderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
