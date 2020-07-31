import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Products, Product } from '../data.products';
import {ProductService} from '../product.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  selectedProduct?:Product;
  // msg?:string;

  setSelectProduct(p:Product){
    this.selectedProduct = p;
    this.messageService.add(`ProductComponent: Selected phone id=${p.id}`);
    console.log(this.selectedProduct);
  }
  
  // @Input('title') titlebox: string;
  constructor(private productService: ProductService, private messageService: MessageService) { }
  
  getProducts():void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
  
  add(name: string, img: string, price: string): void{
    let pro = new Product;
    // this.pro.nameproduct = name
    pro.nameproduct = name
    pro.price = parseInt(price);
    pro.img = img;
    name = name.trim();
    if(!name) { return;}
    // this.nameadd.nameproduct=name;
    // this.nameadd.img="";
    this.productService.addProduct(pro as Product)
    .subscribe(product => {
      this.products.push(product);
    })
  }


  delete(pro:Product):void{
    this.products = this.products.filter(p => p!=pro)
    this.productService.deleteProduct(pro).subscribe();
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
