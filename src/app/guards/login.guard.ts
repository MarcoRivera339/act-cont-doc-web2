import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const loginGuard: CanMatchFn = (route, segments) => {
  const authServicio=inject(AutenticacionService);
  return !authServicio.sesionIniciada();
};
