import { TestBed } from '@angular/core/testing';

import { UpdatedCustomerService } from './updated-customer.service';

describe('UpdatedCustomerService', () => {
  let service: UpdatedCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
