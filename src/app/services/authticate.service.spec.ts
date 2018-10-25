import { TestBed, inject } from '@angular/core/testing';

import { AuthticateService } from './authticate.service';

describe('AuthticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthticateService]
    });
  });

  it('should be created', inject([AuthticateService], (service: AuthticateService) => {
    expect(service).toBeTruthy();
  }));
});
