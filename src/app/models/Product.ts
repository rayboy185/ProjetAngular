
export class Product{

   public productId!: number;

   public productTitle!: string;

   public productPrice!: number;

   public img_url!: string;

   public productDescription!: string;

   public productType!: string;

   constructor(p_productId: number, p_productTitle: string, p_productPrice: number,p_img_url: string){

     this.productId = p_productId;

     this.productPrice = p_productPrice;

     this.productTitle = p_productTitle;
    
     this.img_url = p_img_url;

   }


   
   public get get_img_url() : string {

    return this.get_img_url;
   }
   
   
   public set set_img_url(p_img_url : string) {

    this.img_url = this.img_url;
   }
   

   public get ProductId() : number {

    return this.productId;

   }
   
   public get ProductPrice() : number {

    return this.productPrice;

   }

   public get ProducteTitle() : string {

    return this.productTitle;

   }
   
  
  public set ProducteTitle(v_productTitle : string) {

    this.productTitle = v_productTitle;

  }
     
  public set ProductPrice(v_productPrice : number) {

    this.productPrice = v_productPrice;

  }
  
  public set ProductId(v_productId : number) {

    this.productId = v_productId;

  }

  printProduct(): void{

     console.log("le nom du produit est : " + this.productTitle + ", son id est :  " + this.productId + " et son prix est : " + this.productPrice);

  }
  

}

