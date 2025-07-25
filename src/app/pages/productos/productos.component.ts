import { Component } from '@angular/core';
import { ListaProductosComponent } from "../../components/lista-productos/lista-productos.component";
import { GaleriaComponent } from "../../components/galeria/galeria.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ListaProductosComponent, GaleriaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
