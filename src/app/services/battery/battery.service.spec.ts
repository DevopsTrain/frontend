import {TestBed, inject} from '@angular/core/testing';

import {BatteryService} from './battery.service';
import {HttpModule} from '@angular/http';
import {CoreService} from '../core/core.service';

describe('BatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService, CoreService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
