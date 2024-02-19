import { TestBed } from '@angular/core/testing';

import { MsalUserService } from './msal-user.service';

describe('MsalUserService', () => {
  let service: MsalUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsalUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
