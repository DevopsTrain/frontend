import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Car} from '../../models/car';
import {Observable} from 'rxjs/Observable';
import {CoreService} from '../core/core.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  constructor(private http: Http, private coreService: CoreService) {
    this.cars = [];
  }
  baseUrl: string = '../../assets/json/cars.json';
  data = [];
  cars: Car[];

  // Fetches all data from external rest service
  fetchCars(): Observable<any> {
    return this.coreService.fetchEntity(this.baseUrl);
  }
}
