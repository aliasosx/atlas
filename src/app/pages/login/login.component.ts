import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { AuthticateService } from 'src/app/services/authticate.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrm: FormGroup;

  constructor(private router: Router, private authenticate: AuthticateService) {
    this.loginfrm = this.createFromGroup();
  }
  registerToggle = "container"
  title: string;

  ngOnInit() {
    this.title = "Codename: Atlas";
    if (localStorage.getItem("token") != null) {
      this.router.navigateByUrl("/");
    }
  }
  registerToggleClick() {
    if (this.registerToggle == "container") {
      this.registerToggle = "container active";
    } else {
      this.registerToggle = "container";
    }
  }
  submitClick() {
    let email = this.loginfrm.value.email_login;
    let password = this.loginfrm.value.Password_login;
    this.authenticate.getlogin(
      {
        "user": {
          "email": email,
          "password": password
        }
      }
    ).subscribe(data => {
      if (data.status == "Success") {
        localStorage.setItem("token", data.token);
        this.router.navigateByUrl("/");
      } else {
        console.log("login fail");
      }
    });
  }
  createFromGroup() {
    return new FormGroup({
      email_login: new FormControl(),
      Password_login: new FormControl(),
    });
  }

}
