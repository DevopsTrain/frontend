import {TestBed, inject} from '@angular/core/testing';

import {GeolocationService} from './geolocation.service';
import {HttpModule} from '@angular/http';
import {CoreService} from '../core/core.service';

describe('GeolocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService, CoreService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([GeolocationService], (service: GeolocationService) => {
    expect(service).toBeTruthy();
  }));
});
