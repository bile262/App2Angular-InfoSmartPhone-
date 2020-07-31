import { Injectable } from '@angular/core';
import {Products, Product } from './data.products';
import {Observable, of } from 'rxjs';
import {MessageService } from './message.service' 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // getProducts(): Observable<Product[]>{
  //   this.messageService.add('ProductService: fetched data');
  //   return of(Products);
  // }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    private log(mesage: string){
      this.messageService.add(`ProductService: ${mesage}`);
    }

    private producstUrl = 'api/products';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getProduct(id: number): Observable<Product>{
      const url = `${this.producstUrl}/${id}`;
      // this.messageService.add('ProductService: fetched data');
      return this.http.get<Product>(url)
      .pipe(
        tap(_ => this.log(`fetched product id =${id}`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
        );
    }

    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.producstUrl)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
        );
    }
    
    /** PUT: update product to the server */
    updateProduct(product:Product): Observable<any> {
      return this.http.put(this.producstUrl, product, this.httpOptions)
      .pipe(tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updatedProduct'))
      );
    }

    /** POST: add a new product to the server */
    addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.producstUrl, product, this.httpOptions)
      .pipe(tap((newProduct: Product) => this.log(`added product w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct')));
    }

    /** DELETE: delete a product to the server */
    deleteProduct(pro:Product | number): Observable<Product> {
      const id = typeof pro === 'number' ? pro : pro.id;
      const url = `${this.producstUrl}/${id}`;

      return this.http.delete<Product>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted product id=${id}`)),
        catchError(this.handleError<Product>('deletedProduct'))
      );
    }

    /** GET: product whose name contains search term */
    searchProduct(term: string): Observable<Product[]> {
      if(!term.trim()) {
        // if not search term, return empty array
        return of([]);
      }
      return this.http.get<Product[]>(`${this.producstUrl}/?nameproduct=${term}`).pipe(
        tap(x => x.length ?
          this.log(`found products matching "${term}"`):
          this.log(`no products matching "${term}"`),
          catchError(this.handleError<Product[]>('searchProduct', []))
          )
      );
    } 
     /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?:T){
      return (error:any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
       return of(result as T);
      }
    };
}
