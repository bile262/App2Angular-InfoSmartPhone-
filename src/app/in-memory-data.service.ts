import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api';
import {Product} from './data.products';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    const products =[
      {id: 1, nameproduct: 'IPhone 11',img:'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x460.png',price: 20000000},
    {id: 2, nameproduct: 'Samsung S20',img:'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-600x600-hong-600x600.jpg',price:18000000},
    {id: 3, nameproduct: 'BPhone 3',img:'https://clickbuy.com.vn/uploads/2019/04/bphone-3-pro-den.png',price: 10000000},
    {id: 4, nameproduct: 'VSmart',img:'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-400x460-400x460.png',price: 9000000},
    {id: 5, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 6, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 7, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 8, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 9, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 10, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 11, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 12, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 13, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 14, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 15, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000},
    {id: 16, nameproduct: 'One Plus',img:'https://sudospaces.com/mobilecity-vn/images/2019/11/oneplus7pro3.jpg',price: 12000000}
    ]
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(hero => hero.id)) + 1 : 11;
  }

  // constructor() { }
}
