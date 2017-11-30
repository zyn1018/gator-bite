import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {APP_BASE_HREF} from '@angular/common';
import { CenterComponent } from './center.component';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {DebugElement} from '@angular/core';
import {MockBackend} from '@angular/http/testing';
import {By} from '@angular/platform-browser';
describe('CenterComponent', () => {
  let component: CenterComponent;
  let fixture: ComponentFixture<CenterComponent>;
  let home_html: HTMLElement;
  let home_debug : DebugElement;
  let search_html: HTMLElement;
  let search_debug : DebugElement;
  let backend : MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterComponent],
      imports: [
        RouterModule.forRoot([]),
        MatCardModule,
        HttpModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        MockBackend
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    backend = TestBed.get(MockBackend);
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    home_html = inputs[0].nativeElement;
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    search_html = buttons[1].nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check search restaurant input to be initialized ', () => {
    expect(home_html.textContent).toEqual('');
  });

  it('Check search restaurant button to be initialized ', () => {
    expect(search_html.textContent).toEqual('Find Food\n' +
      ' \ ');
  });

});
