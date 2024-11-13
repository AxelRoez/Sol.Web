import { TestBed } from '@angular/core/testing';

import { DetallesComprasService } from './detalles-compras.service';

describe('DetallesComprasService', () => {
  let service: DetallesComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
