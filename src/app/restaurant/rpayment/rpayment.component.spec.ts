import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RpaymentComponent} from './rpayment.component';

describe('RpaymentComponent', () => {
  let component: RpaymentComponent;
  let fixture: ComponentFixture<RpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RpaymentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
