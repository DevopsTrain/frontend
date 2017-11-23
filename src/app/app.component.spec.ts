import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {AgmCoreModule} from '@agm/core';
import {HttpModule} from '@angular/http';
import {CoreService} from './services/core/core.service';
import {BatteryPipe} from './pipes/battery.pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BatteryPipe
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonModule,
        AgmCoreModule.forRoot()
      ],
      providers: [CoreService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'DevOps - Showcase'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DevOps - Showcase');
  }));
});
