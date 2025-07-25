import { Component } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
    products: Producto[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void{
    this.http.get<Producto[]>('assets/products.json').subscribe(
      producto=>{
        this.products=producto;
      }
    );
    
  }
}
