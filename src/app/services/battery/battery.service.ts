import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CoreService} from '../core/core.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class BatteryService {

  constructor(private http: Http, private coreService: CoreService) {
  }
  baseUrl: string = '../../assets/json/batterystatus.json';
  batteryStatus = [];

  // Fetches all data from external rest service
  fetchBatteryStatus(): Observable<any> {
    return this.coreService.fetchEntity(this.baseUrl);
  }

  fetchBatteryStatusByVin(vin: string): Observable<any> {
    return Observable.of(this.batteryStatus.filter(data => data.vin === vin)[0]);
  }
}
