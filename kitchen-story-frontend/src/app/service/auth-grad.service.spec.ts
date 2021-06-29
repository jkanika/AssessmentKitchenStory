import { TestBed } from '@angular/core/testing';

import { AuthGradService } from './auth-grad.service';

describe('AuthGradService', () => {
  let service: AuthGradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
