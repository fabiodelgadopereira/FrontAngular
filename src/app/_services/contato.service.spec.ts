/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContatoService } from './contato.service';

describe('Service: Contato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoService]
    });
  });

  it('should ...', inject([ContatoService], (service: ContatoService) => {
    expect(service).toBeTruthy();
  }));
});
