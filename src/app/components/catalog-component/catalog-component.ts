

import { Component, inject, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { ProductDetailsComponent } from "../product-details-component/product-details-component"
import { RouterModule,Router, ActivatedRoute } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartComponent } from '../cart-component/cart-component/cart-component';

@Component({
  selector: 'app-catalog-component',
  standalone : true,
  imports: [CommonModule,RouterModule],
  templateUrl: './catalog-component.html',
  styleUrls: ['./catalog-component.css']
})


export class CatalogComponent implements OnChanges{

   items_products: ShoppingCartItem[] = [];

   show_det : boolean = false ;

   prdct_id: number = -1;

   name!: string;

   category: string = '';

   Id: number = 0;

   private router = inject(Router);

   private route = inject(ActivatedRoute);

   private routeSub!: Subscription;

    
   constructor(private prdserv: ProductService){

   }

     
   ngOnInit(){

       // this.items_products = this.prdserv.products.filter( (x) =>  x.Quantite != 0);

      this.route.paramMap.subscribe( params => {

       if(!params.get('Type') && !params.get('Id')){


       }else{

         this.category = String(params.get('Type'));
         this.Id = Number(params.get('Id'));
       }


      if( ((this.category === '' && this.Id === 0 )|| (this.Id === 0  && this.category === 'all') )  ){

        this.prdserv.get_data().subscribe(

          (items) => {

            this.items_products = items.filter((x) => 

            x.Quantite !== 0

         );

        })
        
 
      }else if((this.category === 'all' && this.Id !== 0 )){


      this.prdserv.get_data().subscribe(

      (items) => {

      this.items_products = items.filter((x) => 

        x.itemProduct.productType === this.category && x.Quantite !== 0 &&  x.itemProduct.productId === this.Id

      );

      })

    }else if(this.Id !== 0  && this.category !== 'all'){

       this.prdserv.get_data().subscribe(

         (items) => {

         this.items_products = items.filter((x) => 

        x.itemProduct.productType === this.category && x.Quantite !== 0 && x.itemProduct.productId === this.Id

      );

      })
      
    }else if(this.Id === 0  && this.category !== 'all'){

        this.prdserv.get_data().subscribe(

         (items) => {

         this.items_products = items.filter((x) => 

        x.itemProduct.productType === this.category && x.Quantite !== 0

      );

      })    

    }

   });


    console.log("hi");
  }
   


   ngOnChanges(){

         
      
   }

   ngOnDestroy(){

    console.log("bye");

    if (this.routeSub) {

      this.routeSub.unsubscribe();
    }

   }

   show_details(prd : ShoppingCartItem) :void{

       this.show_det = true; 
       
       this.prdct_id = prd.itemProduct.ProductId;

       console.log("button clicke" + " " + this.prdct_id + " " + this.show_det);
   }

  navigate_to_cart(event: Event) :void{

      event.preventDefault();

       this.router.navigate(['/cart']);
  }
  // ✅ ADD THIS NEW FUNCTION HERE to handle adding items and navigating
  addToCartAndNavigate(product: ShoppingCartItem): void {
    // 1. Use the persistent service to save the item
    this.prdserv.addToCart(product);
    
    // 2. Navigate the user to the generic cart page
    this.router.navigate(['/cart']);
  }

}
