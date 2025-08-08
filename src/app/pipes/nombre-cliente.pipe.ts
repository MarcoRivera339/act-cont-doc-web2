import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCliente',
  standalone: true
})
export class NombreClientePipe implements PipeTransform {

  transform(valor: string): string {
    if (!valor) return '';
    return 'Bienvenido : ' + valor.toUpperCase();
  }

}
