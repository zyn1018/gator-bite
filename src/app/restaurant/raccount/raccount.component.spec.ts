import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaccountComponent} from './raccount.component';

describe('RaccountComponent', () => {
  let component: RaccountComponent;
  let fixture: ComponentFixture<RaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaccountComponent]
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
