import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthticateService } from 'src/app/services/authticate.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nowdate: Date;
  constructor(private router: Router, private auth: AuthticateService, private dataService: DataService) {
    setInterval(() => {
      this.nowdate = new Date();
    });
  }
  token: string;
  username: string;
  payload: string;
  tokenResponse: any;
  menus: any;
  menuclass: string;
  ativeMenu: string;
  title: string;

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
        this.getmenus();
        this.getCompany();
      }
    });
  }

  getmenus() {
    //this.menuclass = "nav-item active";
    console.log(this.router.url)
    if (this.token) {
      this.dataService.getMenu().subscribe(data => {
        this.menus = data;
      });
    }
  }
  getCompany() {
    if (this.token) {
      this.dataService.getCompany(
        {
          "company": {
            "id": "1"
          }
        }
      ).subscribe(data => {
        this.title = data[0].company_name;
      });
    }
  }

}
