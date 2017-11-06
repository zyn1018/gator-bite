import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherComponent } from './together.component';

describe('TogetherComponent', () => {
  let component: TogetherComponent;
  let fixture: ComponentFixture<TogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
