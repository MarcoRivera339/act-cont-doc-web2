import { Component } from '@angular/core';
import { CarrucelComponent } from "../../components/carrucel/carrucel.component";
import { RegistroComponent } from "../../components/registro/registro.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrucelComponent, RegistroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
