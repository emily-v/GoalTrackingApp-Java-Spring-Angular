import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile', 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  logo =  "assets/img/logo.jpg";
  bckgrnd = "assets/img/blackpaper.jpg"
  currUser = JSON.parse(localStorage.getItem('authToken'));
  firstName: string =  this.currUser.firstName;
  userid = this.currUser.userid;




  constructor(private router: Router) { }


  ngOnInit() {
  }

  routeToAllGoals() {
    this.userid = JSON.parse(localStorage.getItem('authToken')).userId;
    console.log("route to userid: " + this.userid);
    this.router.navigate(['all-goals', this.userid]);
  }

 
}
