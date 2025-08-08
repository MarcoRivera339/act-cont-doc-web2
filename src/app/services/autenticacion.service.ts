import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientesService } from './clientes.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient, private servicioClientes: ClientesService) { }


  login(email: string, password: string): Observable<boolean> {
    return this.servicioClientes.getClientes().pipe(
      map((clientes: any[]) => {
        const clienteEncontrado = clientes.find(c => c.email === email);
        if (clienteEncontrado && clienteEncontrado.password === password) {
          localStorage.setItem('user', email);
          return true;
        }
        return false;
      })
    );
  }

  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
  }

  logout = () => {
    localStorage.removeItem('user');
  }
}