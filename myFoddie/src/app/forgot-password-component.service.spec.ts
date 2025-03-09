import { TestBed } from '@angular/core/testing';

import { ForgotPasswordComponentService } from './forgot-password-component.service';

describe('ForgotPasswordComponentService', () => {
  let service: ForgotPasswordComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
