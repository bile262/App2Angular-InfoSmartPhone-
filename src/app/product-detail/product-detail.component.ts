import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../data.products';
import {ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  

  @Input() product:Product;
  
  // @Output() dathangEvent = new EventEmitter<Product>();
  // yeucaudathang(){
  //   this.dathangEvent.emit(this.product);
  //   // console.log(this.product);
  // }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { 
  }
  ngOnInit(): void {
   this.getProduct();
  }
  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .subscribe(product =>this.product = product)
  }

  goBack(): void {
    this.location.back();
  }
  
  save():void{
    this.productService.updateProduct(this.product)
    .subscribe(() => this.goBack());
  }

}
