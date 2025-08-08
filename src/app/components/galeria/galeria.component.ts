import { Component } from '@angular/core';
import { Producto } from '../lista-productos/producto';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  productos: Producto[] = [];
  productosFiltrados: any[] = [];
  filtroNombre: string = '';

  constructor(private http: HttpClient, private servicioProductos: ProductosService, private router: Router,
    private ruta: ActivatedRoute) {
  }

    ngOnInit() {
    this.servicioProductos.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
      this.productosFiltrados = [...this.productos];
    });
  }

  filtrarProductos() {
    const filtro = this.filtroNombre.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro)
    );
  }
} 