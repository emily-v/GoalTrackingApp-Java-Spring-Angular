import { Component, OnInit } from '@angular/core';
import { GoalServiceService } from '../services/goal-service.service';
import { Goal } from '../model/goals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-goals',
  templateUrl: './all-goals.component.html',
  styleUrls: ['./all-goals.component.css']
})
export class AllGoalsComponent implements OnInit {

  logo =  "assets/img/logo.jpg";
  bckgrnd = "assets/img/blackpaper.jpg";
  goals: Array<Goal> = [];
  currUser = JSON.parse(localStorage.getItem('authToken'));
  firstName: string =  this.currUser.firstName;
  
  constructor(private goalService: GoalServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    let userid = +this.route.snapshot.paramMap.get('id'); // could get from localStorage instead
    console.log("useridroute: " + userid);
    
    this.goalService.getAllUserGoals(userid)
      .subscribe(
        (goals) => this.goals = goals,
        (err) => console.log(err)
       );
    
  }

  setCurrGoal(goal: Goal) {
    localStorage.setItem('currGoal', JSON.stringify(goal));
    console.log(goal);
  }

      





}
