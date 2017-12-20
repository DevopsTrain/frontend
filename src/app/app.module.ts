import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AgmCoreModule} from '@agm/core';
import {HttpModule} from '@angular/http';
import {CoreService} from './services/core/core.service';
import {BatteryPipe} from './pipes/battery.pipe';
import {DirectionDirectivesMapDirective} from './directives/direction.directive';
import { TimestampPipe } from './pipes/timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BatteryPipe,
    DirectionDirectivesMapDirective,
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
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDPjCZdmVICOA7vhwLHc6PePIY8fdCNpcI'
    })
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
