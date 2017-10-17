import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DishesManageComponent} from './dishes-manage.component';
import {Pipe} from '@angular/core';

describe('DishesManageComponent', () => {
  let component: DishesManageComponent;
  let fixture: ComponentFixture<DishesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesManageComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        Pipe,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
