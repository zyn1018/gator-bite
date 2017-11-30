import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module';
import {APP_BASE_HREF} from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {HttpModule} from '@angular/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule.forRoot([]),
        CoreModule,
        MatToolbarModule,
        HttpModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain a .site element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.site')).toBeTruthy();
  }));
});
