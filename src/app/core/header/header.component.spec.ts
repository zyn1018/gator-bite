import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../domain/user.service';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from '../../utils/authentication.service';
import {DebugElement} from '@angular/core';
import {MockBackend} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let home_html: HTMLElement;
  let home_debug : DebugElement;
  let login_debug : DebugElement;
  let login_html: HTMLElement;
  let signUp_debug: DebugElement;
  let signUp_html : HTMLElement;
  let backend : MockBackend;
  let searchspy : jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterModule.forRoot([]),
        MatToolbarModule,
        HttpModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        UserService,
        AuthenticationService,
        MockBackend
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    backend = TestBed.get(MockBackend);
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    home_html = buttons[0].nativeElement;
    login_html = buttons[1].nativeElement;
    signUp_html = buttons[2].nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Check home button is correct', () => {
    expect(home_html.textContent).toEqual('Gator Bite');
  });
  it('Check home button is correct', () => {
    expect(login_html.textContent).toEqual('Sign in');
  });
  it('Check home button is correct', () => {
    expect(signUp_html.textContent).toEqual('Sign up');
  });
  // it('checks  search button', async(() => {
  //   searchspy = spyOn(component, 'SearchRestaurants').and.callThrough();
  //   const searchBtn = fixture.debugElement.nativeElement.querySelector('button');
  //   searchBtn.click();
  //   fixture.whenStable().then(()=>{
  //     expect(component.).toHaveBeenCalled()
  //   });
  // }));
});
