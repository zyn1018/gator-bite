import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {MatCardModule, MatRadioModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {AuthenticationService} from '../../utils/authentication.service';
import {BaseRequestOptions, Http, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
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
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
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


  it('should send the login request to the server', (done) => {
    done();
  });
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
