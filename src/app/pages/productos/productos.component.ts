import { Component } from '@angular/core';
import { GaleriaComponent } from "../../components/galeria/galeria.component";
import { ListPaginationComponent } from '../../components/list-pagination/list-pagination.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [GaleriaComponent, ListPaginationComponent,SearchInputComponent ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
