import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product.model';

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
}
