import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'nosotros', component: NosotrosComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
