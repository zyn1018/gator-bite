import {DishFilterPipe} from './dish-filter.pipe';
import {TestBed, async} from '@angular/core/testing';
import {Pipe} from '@angular/core';
import {AppComponent} from '../app.component';
describe('DishFilterPipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        Pipe,
      ],
    }).compileComponents();
  }));
});
