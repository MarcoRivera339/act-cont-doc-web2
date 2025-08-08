import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidoCliente',
  standalone: true
})
export class ApellidoClientePipe implements PipeTransform {

  transform(valor: string): string {
    if (!valor) return '';
    return valor.toUpperCase();
  }

}
