import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaccountComponent} from './raccount.component';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {HttpModule} from '@angular/http';

describe('RaccountComponent', () => {
  let component: RaccountComponent;
  let fixture: ComponentFixture<RaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        RouterModule.forRoot([]),
        HttpModule
      ],
      declarations: [RaccountComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
