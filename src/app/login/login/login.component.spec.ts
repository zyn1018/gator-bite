import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {MatCardModule, MatRadioModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {AuthenticationService} from '../../utils/authentication.service';
import {Http, HttpModule} from '@angular/http';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let regSpy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        RouterModule.forRoot([]),
        HttpModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        UserService,
        AuthenticationService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`Login page should have email to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.email).toBeUndefined();
  }));

  it(`Login page should have password to be filled in`, async(() => {
    const test = fixture.debugElement.componentInstance;
    expect(test.password).toBeUndefined();
  }));


  // describe('when the user submits the login form', () => {
  //
  //   beforeEach(() => {
  //     regSpy = spyOn(component, 'login');
  //     const reg_button = fixture.debugElement.nativeElement.querySelector('button');
  //     reg_button.click();
  //   });
  //
  //   it('should invoke the login function', async(() => {
  //     fixture.whenStable().then(() => {
  //       expect(component.login()).toBeUndefined();
  //     });
  //   }));
  // });

});
