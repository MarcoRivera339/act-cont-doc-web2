import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { registroClienteGuard } from './guards/registro-cliente.guard';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';
import { autenticaGuard } from './guards/autentica.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent, canActivate:[autenticaGuard] },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'registro', component: RegistroComponent, canDeactivate:[registroClienteGuard] },
    { path: 'login', component: LoginComponent, canMatch: [loginGuard] },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
