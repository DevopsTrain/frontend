import {TestBed, inject} from '@angular/core/testing';

import {CarService} from './car.service';
import {HttpModule} from '@angular/http';
import {CoreService} from '../core/core.service';

describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService, CoreService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
