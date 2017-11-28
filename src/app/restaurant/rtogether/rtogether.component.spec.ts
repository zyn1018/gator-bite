import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RtogetherComponent} from './rtogether.component';

describe('RtogetherComponent', () => {
  let component: RtogetherComponent;
  let fixture: ComponentFixture<RtogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RtogetherComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
