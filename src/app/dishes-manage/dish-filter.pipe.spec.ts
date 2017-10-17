import {DishFilterPipe} from './dish-filter.pipe';
import { TestBed, async } from '@angular/core/testing';
import {Pipe} from '@angular/core';
describe('DishFilterPipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        Pipe,
      ],
    }).compileComponents();
  }));
  it('create an instance', () => {
    const pipe = new DishFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
