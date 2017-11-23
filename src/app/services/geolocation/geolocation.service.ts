import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CoreService} from '../core/core.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/interval';

@Injectable()
export class GeolocationService {

  constructor(private http: Http, private coreService: CoreService) {
  }
  baseUrl: string = '../../assets/json/geolocation.json';
  url: string = 'https://geoposition2017.azurewebsites.net/api/GeoPosition/';
  geoLocations = [];

  // Fetches all data from external rest service
  fetchGeolocations(): Observable<any> {
    return this.coreService.fetchEntity(this.baseUrl);
  }

  fetchGeolocationByVin(vin: string): Observable<any> {
    return this.coreService.fetchEntity(this.url + vin);
  }
}
