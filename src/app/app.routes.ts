import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/auth/shopping-cart/shopping-cart.component';
import { FavoComponent } from './components/auth/favo/favo.component';
import { CategoriaComponent } from './components/auth/categoria/categoria.component';
import { ProductoComponent } from './components/auth/producto/producto.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'shopping-cart', component:ShoppingCartComponent},
    {path: 'favo', component:FavoComponent},
    {path: 'categoria', component:CategoriaComponent},
    {path: 'productos', component:ProductoComponent}
];
