import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog-component/catalog-component';
import { CartComponent } from './components/cart-component/cart-component/cart-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [

    {path : '', component : HomeComponent},
    {path: 'home', component: HomeComponent },    
    {path: 'catalog', component: CatalogComponent },
    {path : 'cart', component : CartComponent, title : 'My Cart'},
    {path: 'catalog/:Type', component: CatalogComponent },
    {path: 'catalog/:Type/:Id', component: CatalogComponent },
    {path: 'cart/:Id', component: CartComponent }
    // { path: 'signin', component:  }, 
    // { path: 'register', component:  },  
    // {path: '**', redirectTo: '' }

];
