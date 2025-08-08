import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private API_CLIENTES = 'http://localhost:3000/clientes'

  postClientes(cliente: any): Observable<any> {
    return this.http.post(`${this.API_CLIENTES}`, cliente)
  }

  getClientes(): Observable<any> {
    return this.http.get(`${this.API_CLIENTES}`)
  }

  getClienteById(id: string): Observable<any> {
    return this.http.get(`${this.API_CLIENTES}/${id}`)
  }

}
