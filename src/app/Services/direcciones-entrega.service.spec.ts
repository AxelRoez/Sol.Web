import { TestBed } from '@angular/core/testing';

import { DireccionesEntregaService } from './direcciones-entrega.service';

describe('DireccionesEntregaService', () => {
  let service: DireccionesEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionesEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
