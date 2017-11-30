import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {APP_BASE_HREF} from '@angular/common';
import { CenterComponent } from './center.component';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
describe('CenterComponent', () => {
  let component: CenterComponent;
  let fixture: ComponentFixture<CenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterComponent],
      imports: [
        RouterModule.forRoot([]),
        MatCardModule,
        HttpModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
