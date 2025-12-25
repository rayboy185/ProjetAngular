

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      
        {
          itemProduct: { 
          productId: 1,  
          productTitle: 'iphone',  
          productPrice: 10000,  
          img_url: 'images/products/iphone.jpg', 
          productDescription: 'Apple iPhone 14 Pro (256 GB) - Gold',
          productType: 'SmartPhone'
 
        }, 
        Quantite: 20
      },
      { 
        itemProduct: { 
          productId: 2, 
          productTitle: 'samsung', 
          productPrice: 12000,
          img_url: 'images/products/samsung_tv.jpg',
          productDescription: 'Samsung 65" Q7F QLED 4K Vision AI Smart TV 2025',
          productType: 'tv'

        }, 
        Quantite: 10 
      },
      { 
        itemProduct: { 
          productId: 3, 
          productTitle: 'xiaomi', 
          productPrice: 6000,
          img_url: 'images/products/xiaomi-pad.jpg',
          productDescription: ' Xiaomi Tab Pad 7 12GB RAM and 256GB storage, Qualcomm Snapdragon 7+ Gen 3 processor ',
          productType: 'tablet'

        }, 
        Quantite: 3
      },
       { 
        itemProduct: { 
          productId: 4, 
          productTitle: 'asus', 
          productPrice: 13000,
          img_url: 'images/products/asus.jpg',
          productDescription: ' asus ROG Phone 9 Pro  ',
          productType: 'SmartPhone'

        }, 
        Quantite: 6
      },
       { 
        itemProduct: { 
          productId: 5, 
          productTitle: 'acer', 
          productPrice: 13000,
          img_url: 'images/products/acer-tv.jpg',
          productDescription: ' acer 80 cm (32 inches) G Plus Series HD Ready LED Smart Google TV AR32HDGGR2841AD ',
          productType: 'tv'

        }, 
        Quantite: 13
      },
       { 
        itemProduct: { 
          productId: 6, 
          productTitle: 'Honor', 
          productPrice: 7000,
          img_url: 'images/products/Honor-pad.jpg',
          productDescription: 'HONOR Pad X8a (Smartchoice) Wi-Fi Tablet with Free Flip-Cover 27.94Cm (11 Inch),4GB Ram 128 GB ROM Expandable Up to 1TB FHD Display 90Hz,8300Mah Battery,Quad Speakers,Snapdragon 680,Android 14,Gre ',
          productType: 'tablet'

        }, 
        Quantite: 24
      },
       { 
        itemProduct: { 
          productId: 7, 
          productTitle: 'samsung', 
          productPrice: 9000,
          img_url: 'images/products/samsung-tab.jpg',
          productDescription: 'Samsung Galaxy Tab A9 4G LTE (64GB, 4GB, Cellular) 8.7" Android Tablet, Octa-core (6nm), Dual Speakers (International Model Fully Unlocked for US & Global) X115 (w/ 15W Fast Charger, Graphite) ',
          productType: 'tablet'

        }, 
        Quantite: 17
      }

    ];
    return { items };
  }
}
