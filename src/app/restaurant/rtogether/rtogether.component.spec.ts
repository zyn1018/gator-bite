import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RtogetherComponent} from './rtogether.component';
import {RestaurantModule} from '../restaurant.module';

describe('RtogetherComponent', () => {
  let component: RtogetherComponent;
  let fixture: ComponentFixture<RtogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RestaurantModule
      ],
      declarations: [RtogetherComponent]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RtogetherComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
