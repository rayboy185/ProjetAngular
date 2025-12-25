import { Component, inject } from '@angular/core';
// Removed unused imports: Router, ActivatedRoute, ShoppingCart model
import { ProductService } from '../../../services/product.service';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem';

@Component({
  selector: 'app-cart-component',
  imports: [],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {

    // Removed unused variables: router, route, Id
     
    cartItems: ShoppingCartItem[] = [];
    private productService = inject(ProductService);

    ngOnInit(){
      // Load items from the shared service immediately
      this.cartItems = this.productService.getCartItems();
      console.log("Cart component initialized with items:", this.cartItems);
    }

    remove_item(item: ShoppingCartItem) :void{
     // Call the service's remove method and update the local list
     this.productService.removeFromCart(item.itemProduct.ProductId);
     this.cartItems = this.productService.getCartItems(); // Re-sync the local array
    }
}
