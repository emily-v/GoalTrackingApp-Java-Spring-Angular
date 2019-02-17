import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  email: string;
  password: string;

  returnUrl: string;

  userid: number;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'api/users/user=';

  }

  loginSubmit(){
    this.authService.authenticate(this.email, this.password,
      // () => console.log(this.userid),
      () => this.routeToProfile(),
      (err) => {
        alert("Invalid login attempt. Please try again.");
      });
  }

  routeToProfile() {
    this.userid = JSON.parse(localStorage.getItem('authToken')).userId;
    console.log(this.userid);
    this.router.navigate(['user-profile', this.userid])
  }

}
