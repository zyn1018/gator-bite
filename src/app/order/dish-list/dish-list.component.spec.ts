import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishListComponent} from './dish-list.component';

describe('DishListComponent', () => {
  let component: DishListComponent;
  let fixture: ComponentFixture<DishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
