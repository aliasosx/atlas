import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  token = localStorage.getItem("token");
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token
    })
  };
  url = environment.url;

  getMenu() {
    return this.http.get(this.url + 'menus/usermenu', this.httpOptions);
  }
  getCompany(company) {
    return this.http.post(this.url + 'company', company, this.httpOptions);
  }
}