import { TestBed } from '@angular/core/testing';

import { APIwelldomeService } from './apiwelldome.service';

describe('APIwelldomeService', () => {
  let service: APIwelldomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIwelldomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
