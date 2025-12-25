


import { Product } from "./Product";

export class ShoppingCartItem{

    itemProduct!: Product;

     Quantite!: number ;

   constructor(p_itemProduct: Product,p_quantite: number){

       this.Quantite = p_quantite;

       this.itemProduct = p_itemProduct;

   }

   addProduct(quantite: number): void{

    if (quantite > 0)

       this.Quantite +=quantite;

   }
   
   substractProduct(quantite: number ): void{

      if(this.Quantite == 0 || quantite < 0 )

         console.log(" impossible  de decrementer sa quantite !");

      else

         this.Quantite -=quantite ;
      
   }

   displayProduct(): void{

      console.log(this.itemProduct + "sa quantite est : " + this.Quantite);

   }


}