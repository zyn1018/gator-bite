import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaddressComponent} from './raddress.component';

describe('RaddressComponent', () => {
  let component: RaddressComponent;
  let fixture: ComponentFixture<RaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
