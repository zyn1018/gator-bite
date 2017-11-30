import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import {MatListModule} from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserService} from '../../domain/user.service';
import {HttpModule} from '@angular/http';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        RouterModule.forRoot([]),
        HttpModule
      ],
      declarations: [
        AccountComponent, ],
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
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Cant get all links', async() =>{
    const fixture = TestBed.createComponent(AccountComponent);
    fixture.detectChanges();
  })
});
