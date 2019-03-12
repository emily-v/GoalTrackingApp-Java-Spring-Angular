import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currUser = JSON.parse(localStorage.getItem('authToken'));
  // firstName: string =  this.currUser.firstName;
  userid = this.currUser.userId;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToAllGoals() {
    let userid = JSON.parse(localStorage.getItem('authToken')).userId;
    console.log("route to userid: " + userid);
    this.router.navigate(['all-goals', userid]);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currGoal');
  }

}
