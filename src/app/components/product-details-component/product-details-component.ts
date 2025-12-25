import { Component, OnChanges, Input} from '@angular/core';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-details-component',
  imports: [],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css',
})


export class ProductDetailsComponent implements OnChanges {


    items !:ShoppingCartItem [];

   item!: ShoppingCartItem | undefined;    

  constructor( public prdc_ser: ProductService){}

  ngOnChanges(){

    // this.items  = this.prdc_ser.products.filter(x => x.Quantite != 0);

    this.prdc_ser.get_data().subscribe(items =>

          this.items = items.filter( (x) =>  x.Quantite != 0)
        );

    
    this.item = this.items.find(e => e.itemProduct.ProductId == this.prdct_id);

     console.log('ProductDetails init - show_det:', this.show_det, 'prdct_id:', this.prdct_id);
  }

    @Input() show_det : boolean = false;

    @Input() prdct_id : number = -1;


   
}
