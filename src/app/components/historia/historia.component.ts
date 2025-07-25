import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  empleados: Empleado[] = [];
  
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void{
      this.http.get<Empleado[]>('assets/empleados.json').subscribe(
        empleado=>{
          this.empleados=empleado ;
        }
      );
      
    }
}
