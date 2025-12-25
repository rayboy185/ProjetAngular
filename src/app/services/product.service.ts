import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCartItem } from '../models/ShoppingCartItem';
import { ShoppingCart } from '../models/ShoppingCart';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
      api_url : string = '/api/items';

      constructor(private http : HttpClient){}
     
      // >>>>> NEW: This array stores the user's current cart items <<<<<
      private userCartItems: ShoppingCartItem[] = [];

      get_data() : Observable<ShoppingCartItem []> {
         console.log('Making request to:', this.api_url); 
         return this.http.get<ShoppingCartItem []>(this.api_url);
      }

      // >>>>> NEW: Method to add an item to the shared cart <<<<<
      addToCart(item: ShoppingCartItem): void {
          const existingItem = this.userCartItems.find(i => i.itemProduct.ProductId === item.itemProduct.ProductId);
          if (existingItem) {
              existingItem.Quantite += item.Quantite > 0 ? item.Quantite : 1; 
          } else {
              this.userCartItems.push(item);
          }
          console.log("Cart contents updated:", this.userCartItems);
      }

      // >>>>> NEW: Method to retrieve the current shared cart items <<<<<
      getCartItems(): ShoppingCartItem[] {
          return [...this.userCartItems]; 
      }

      // >>>>> NEW: Method to remove an item from the shared cart <<<<<
      removeFromCart(productId: number): void {
          this.userCartItems = this.userCartItems.filter(item => item.itemProduct.ProductId !== productId);
      }
}
