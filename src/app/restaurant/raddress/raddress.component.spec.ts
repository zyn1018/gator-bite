import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaddressComponent} from './raddress.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';

describe('RaddressComponent', () => {
  let component: RaddressComponent;
  let fixture: ComponentFixture<RaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [RaddressComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
      ]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RaddressComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
