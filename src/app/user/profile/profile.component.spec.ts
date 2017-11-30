import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let backend: MockBackend;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ ProfileComponent ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        UserService,
      ]
    })
    .compileComponents();
  }));

});
