import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupComponent} from './signup.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatRadioModule} from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let regSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        HttpModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Signup page should have email to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.email).toBeUndefined();
  }));

  it(`Signup page should have username to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.username).toBeUndefined();
  }));

  it(`Signup page should have password to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.password).toBeUndefined();
  }));

  it(`Signup page should have confirmPassword to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.confirmPassword).toBeUndefined();
  }));


  describe('when the user submits the registration form', () => {

    beforeEach(() => {
      regSpy = spyOn(component, 'register');
      const reg_button = fixture.debugElement.nativeElement.querySelector('button');
      reg_button.click();
    });

    it('should invoke the onRegisterSubmit function', async(() => {
      fixture.whenStable().then(() => {
        expect(component.register()).toBeUndefined();
      });
    }));
  });
});
