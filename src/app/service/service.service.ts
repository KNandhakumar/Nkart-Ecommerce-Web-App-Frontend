import { Product } from './../model/Product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  // api url
  private apiUrl = 'http://localhost:8080/api/products';

  // get all products
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  };

  // add product
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  };

  // get single product using id
  getSingleProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  };

  // update product
  updateProduct(id:number,updatedProduct:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/${id}`,updatedProduct);
  }

  // delete product
  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  };
}
