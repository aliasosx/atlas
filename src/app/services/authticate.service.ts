import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IuserResponse } from '../models/userResponse';
import { ItokenResponse } from '../models/loginResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthticateService {
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  url = environment.url;

  getlogin(login) {
    return this.http.post<IuserResponse>(this.url + 'login', login, this.httpOptions);
  }
  getTokenDecode(token) {
    return this.http.post(this.url + 'login/decode', token, this.httpOptions);
  }
}
