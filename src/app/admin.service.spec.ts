import { TestBed } from '@angular/core/testing';

import { AdminTableService } from './admin.service';

describe('AdminService', () => {
  let service: AdminTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
