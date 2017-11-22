import {TestBed, inject} from '@angular/core/testing';

import {CoreService} from './core.service';
import {HttpModule} from '@angular/http';

describe('CoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));
});
