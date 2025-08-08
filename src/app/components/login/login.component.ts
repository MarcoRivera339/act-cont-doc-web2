import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AutenticacionService, private router: Router) { }

  login = () => {
  this.authServicio.login(this.email, this.password).subscribe((sesionExitosa) => {
    if (sesionExitosa) {
      const redireccion = localStorage.getItem('redirectUrl') || '/productos';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    } else {
      this.error = "Usuario o contraseña incorrectos";
    }
  }, error => {
    this.error = "Error al intentar iniciar sesión";
    console.error(error);
  });
}
}
