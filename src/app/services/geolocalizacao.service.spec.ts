import { TestBed } from '@angular/core/testing';

import { GeolocalizacaoService } from './geolocalizacao.service';

describe('GeolocalizacaoService', () => {
  let service: GeolocalizacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
