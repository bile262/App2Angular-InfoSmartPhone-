import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import{
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Product } from '../data.products';
import {ProductService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductService) { }

  search(term: string):void{
    this.searchTerms.next(term);
  }



  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      // wait 3000ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as prvious term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProduct(term)),
    );
  }

}
