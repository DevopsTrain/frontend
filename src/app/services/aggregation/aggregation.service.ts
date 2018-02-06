import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CoreService} from '../core/core.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class AggregationService {
    
    url: string = 'http://aggregation.devopstrain.spc5jcoyw7.stackpoint.io/api/vehiclestatus/';

  constructor(private http: Http, private coreService: CoreService) { }
  
  fetchDataByVin(vin: string): Observable<any> {
      return this.coreService.fetchEntity(this.url + vin);
    }
}
