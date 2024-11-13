import { TestBed } from '@angular/core/testing';

import { TipoComprobantesService } from './tipo-comprobantes.service';

describe('TipoComprobantesService', () => {
  let service: TipoComprobantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoComprobantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
