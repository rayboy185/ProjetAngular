import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  
     private prd_serv = inject(ProductService);


     items_products: ShoppingCartItem[] = [];    

   ngOnInit() {

        this.prd_serv.get_data().subscribe( item =>{
        
             this.items_products = item.filter( x => x.Quantite != 0);

     });   

   }






}
