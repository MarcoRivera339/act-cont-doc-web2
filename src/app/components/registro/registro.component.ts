import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NombreClientePipe } from '../../pipes/nombre-cliente.pipe';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NombreClientePipe],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor (private formB: FormBuilder, private servicioClientes: ClientesService){}

  enviado: boolean = false;

  registroForm: FormGroup= this.formB.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    nombre:['', Validators.required],
    apellido:['', Validators.required],
    telefono:['', Validators.required],
    profesion:['', Validators.required], 
  })

  registrar=(formulario:any)=>{
    if(this.registroForm.valid){
      this.enviado=true;
      //IMPRIMA EN CONSOLA UN MENSAJE DE REGISTRO EXITOSO Y LOS VALORES ENVIADOS
      console.log('Registro exitoso', this.registroForm.value)
      this.servicioClientes.postClientes(formulario.value).subscribe({
  next: (respuesta) => {
    console.log('Cliente guardado:', respuesta);
    alert('Registro exitoso');
  },
  error: (error) => {
    console.error('Error al registrar cliente:', error);
    alert('Ocurrió un error al registrar');
  }
});

    }else{
      //muestra los errores
      this.registroForm.markAllAsTouched();
    }

  }

  //guardian candeactivate
  camposVacios = () => {
    return !this.enviado && Object.values(this.registroForm).some(valor => valor.trim?.() !== '');
  }
}
