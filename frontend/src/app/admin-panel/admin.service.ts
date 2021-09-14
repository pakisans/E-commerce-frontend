import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BACKEND_BASE = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  addCategory(name: string): Observable<any> {
    return this.httpClient.post(this.BACKEND_BASE + '/categories/add', {
      name: name
    })
  }

  addUser(userJson: any): Observable<any> {
    return this.httpClient.post(this.BACKEND_BASE + '/users/registerAdmin', userJson)
  }

  addProduct(productJson: any): Observable<any> {
    return this.httpClient.post(this.BACKEND_BASE + '/products/addProduct', productJson);
  }
}
