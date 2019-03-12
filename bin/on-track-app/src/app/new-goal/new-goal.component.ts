import { Component, OnInit } from '@angular/core';
import { Goal } from '../model/goals';
import { User } from '../model/user';
import { GoalServiceService } from '../services/goal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent implements OnInit {
  logo =  "assets/img/logo.jpg";
  bckgrnd = "assets/img/blackpaper.jpg"

  goal: Goal = new Goal();
  // goal: Goal;
  // form: Goal;
  testUser: User = new User();
  submitted = false;
  currUser = JSON.parse(localStorage.getItem('authToken'));

  constructor(private goalService : GoalServiceService, private router: Router) { }

  ngOnInit() {
    this.testUser = {
      userId: 4,
      email: "test4@email.com",
      password: "pass4",
      firstName:"test4first",
      lastName: "test4last"}

      console.log(this.testUser);
  }

// clears out the form
  newGoal(): void {
    this.submitted = false;
    this.goal = new Goal();
  }

  saveNewGoal() {
    
    this.goal.goalId = 11;
    this.goal.user = this.currUser;
    console.log(this.currUser.userId);
    console.log(this.goal);

    this.goalService.createGoal(this.goal)
      .subscribe(data => console.log(data), error => console.log(error));
      this.goal = new Goal();
      this.router.navigate(['/user-profile', this.currUser.userId]);
    // this.navigate();
  }

  // onSubmit() {
  //   this.submitted = true;
  //   this.saveNewGoal()
  // }

  navigate() {
    this.router.navigate(['/all-goals', this.currUser.userId]);
  }

}
