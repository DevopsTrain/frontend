import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { CoreService } from './services/core/core.service';
import { CarService } from './services/car/car.service';
import { BatteryPipe } from './pipes/battery.pipe';
import { TimestampPipe } from './pipes/timestamp.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Car } from './models/car';
import { Location } from './models/location';
import { BatteryStatus } from './models/batterystatus';
import * as moment from 'moment';
describe( 'AppComponent', () => {
    const { screenshot } = require( 'karma-nightmare' );
    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [
                AppComponent,
                BatteryPipe,
                TimestampPipe
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
                MatProgressSpinnerModule,
                AgmCoreModule.forRoot()
            ],
            providers: [CoreService, CarService]
        } ).compileComponents();
    } ) );

    it( 'should create the app', async(() => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app ).toBeTruthy();
    } ) );
    it( `should have as title 'DevOps - Showcase'`, async(() => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app.title ).toEqual( 'DevOps - Showcase' );
    } ) );
    it( `should have a colored toolbar`, done => {
        const fixture = TestBed.createComponent( AppComponent );
        fixture.detectChanges();
        const title = <HTMLElement>fixture.debugElement.query( By.css( 'mat-toolbar' ) ).nativeElement;
        const color = window.getComputedStyle( title ).getPropertyValue( "background-color" );
        /*
        expect(color).toBe('rgb(255, 193, 7)');
         */
        expect( color ).toBe( 'rgb(63, 81, 181)' );
        fixture.whenRenderingDone().then(() => {
            fixture.detectChanges();
            setTimeout(() => {
                screenshot( './testresults/screenshots/toolbar.png' ).then( done() );
            }, 1000 );
        } );
    } );
    it( `should have two cars for selection`, done => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        let carService = fixture.debugElement.injector.get( CarService );

        carService.fetchCars().subscribe( res => {
            app.cars = res[0];
            expect( app.cars.length ).toEqual( 2 );
            fixture.whenRenderingDone().then(() => {
                fixture.detectChanges();
                setTimeout(() => {
                    screenshot( './testresults/screenshots/cars.png' ).then( done() );
                }, 1000 );
            } );
        } );
    } );
} );
