// import { findSourceMap } from "module";
import { ShoppingCartItem } from "./ShoppingCartItem"

export class ShoppingCart{
   
    public itemsProduct!: ShoppingCartItem[];
    
    public total!: number;

    constructor (itemsProduct: ShoppingCartItem[], total: number){
      
         this.itemsProduct = itemsProduct;

         this.total = total;
   }
  

   addItem(item: ShoppingCartItem) :void{

       const existingElementIndex :number = this.itemsProduct.findIndex( (x) => x.itemProduct.ProductId == item.itemProduct.ProductId);

        if(existingElementIndex != -1 ){
                   
         const oldQuantity :number = this.itemsProduct[existingElementIndex].Quantite;

         this.itemsProduct[existingElementIndex].addProduct(item.Quantite); 

         const newQuantity :number = this.itemsProduct[existingElementIndex].Quantite;

          this.total += item.itemProduct.ProductPrice*(newQuantity - oldQuantity);

        }else

           this.itemsProduct.push(item);

          this.total += item.itemProduct.ProductPrice*item.Quantite;
    }
         
   
    removeItem (item: ShoppingCartItem) :void{

       const existingElementIndex :number = this.itemsProduct.findIndex( (x) => x.itemProduct.ProductId == item.itemProduct.ProductId);

       if( existingElementIndex != -1){
            
          this.itemsProduct[existingElementIndex].substractProduct(item.Quantite);
          
          this.total -= item.itemProduct.ProductPrice*item.itemProduct.ProductPrice;

          this.itemsProduct = this.itemsProduct.filter(it => it != item);

        }else

           console.log("l'element n'existe pas pour le supprimer !"); 

 
     }


   getItems(): ShoppingCartItem [] {

      return Array.from(this.itemsProduct);

    }

    clearCart(): void {

        this.itemsProduct = [];

        this.total = 0;
    }

   

}