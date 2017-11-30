import {TestBed, inject} from '@angular/core/testing';

import {DishService} from './dish.service';
import {HttpModule} from '@angular/http';

describe('DishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers:
        [DishService],
    });
  });

  it('should be created', inject([DishService], (service: DishService) => {
    expect(service).toBeTruthy();
  }));
});
