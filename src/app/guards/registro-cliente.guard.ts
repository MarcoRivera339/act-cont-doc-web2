import { CanDeactivateFn } from '@angular/router';
import { RegistroComponent } from '../components/registro/registro.component';

export const registroClienteGuard: CanDeactivateFn<RegistroComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.camposVacios()){
    return confirm('Tienes datos sin registrar. Quieres abandonar el formulario?')
  }
  return true;
};
