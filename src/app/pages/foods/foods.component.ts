import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthticateService } from 'src/app/services/authticate.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor(private router: Router, private auth: AuthticateService, private dataService: DataService) { }
  token: string;
  username: string;
  payload: string;
  tokenResponse: any;
  menus: any;
  menuclass: string;
  ativeMenu: string;
  title: string;

  public data: any;


  ngOnInit() {
    this.title = "Atlas";
    this.token = localStorage.getItem("token");

    if (!this.token) {
      this.router.navigateByUrl("login");
    }
    this.auth.getTokenDecode({
      "token": this.token
    }).subscribe(data => {
      if (data) {
        this.tokenResponse = data;
        this.username = this.tokenResponse.payload.split("|")[0];
        this.getFoods();

      }
    });
  }
  getFoods() {
    this.dataService.getFoods().subscribe(foods => {
      this.data = foods;
      console.log(this.data);
    });
  }
}
