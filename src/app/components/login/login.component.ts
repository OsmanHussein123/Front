import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Account} from "../../class/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountLogin = new Account();
  text : string;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService,private router: Router) {

  }
  ngOnInit(): void {
  }

  loginWithPassword() {
    this.accountLogin.username = this.loginForm.controls['username'].value;
    this.accountLogin.password = this.loginForm.controls['password'].value;
    this.authService.Login(this.accountLogin).subscribe((response) => {
      this.text= response;
      console.log(response);
      localStorage.setItem("token", response);
      this.router.navigateByUrl("/home");
    });

  }

}
