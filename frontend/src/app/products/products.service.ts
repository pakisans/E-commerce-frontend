import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = "http://localhost:8080/products"

  constructor(private http: HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);

  }
}
