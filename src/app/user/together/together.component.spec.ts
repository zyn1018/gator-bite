import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherComponent } from './together.component';
import {UserModule} from '../user.module';

describe('TogetherComponent', () => {
  let component: TogetherComponent;
  let fixture: ComponentFixture<TogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule
      ],
      declarations: [ TogetherComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TogetherComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
