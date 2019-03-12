import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserServiceService} from "../services/user-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  logo =  "assets/img/logo.jpg";
  bckgrnd = "assets/img/blackpaper.jpg"
  user: User = new User();
  submitted = false;
  testUser : User;
  
  constructor(private userService: UserServiceService, private router: Router) { }
  ngOnInit() {
  }
  newUser():void{
    this.submitted = false;
    this.user = new User();
  }
  saveNewUser() {
    this.user.userId = 5;
    this.user
    console.log(this.user);
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.router.navigate(['']);
  }
  newUseronSubmit(){
    this.submitted = true;
    this.saveNewUser()
  }
}
