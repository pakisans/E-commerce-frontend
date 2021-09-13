import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BACKEND_BASE = 'http://localhost:8080/users'

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.BACKEND_BASE +'/login', {
      email: email,
      password: password
    })
  }
}
