import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { registroClienteGuard } from './registro-cliente.guard';

describe('registroClienteGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroClienteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
