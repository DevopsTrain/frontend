import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class CoreService {

  data = [];

  constructor(private http: Http) {
  }

  getRequest(url: string) {
    return this.http.get(url);
  }

  // Fetches all data from external rest service
  fetchEntity(url: string): Observable<any> {
    return Observable.forkJoin(
      this.getRequest(url).map(res => res.json())
    );
  }
}
