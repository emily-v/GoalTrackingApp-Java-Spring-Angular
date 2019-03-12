import { Component, OnInit } from '@angular/core';
import { Goal } from '../model/goals';
import { Entry } from '../model/entries';
import { EntryServiceService } from '../services/entry-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  // FirstName = "Kayma";
  logo =  "assets/img/logo.jpg";
  bckgrnd = "assets/img/blackpaper.jpg"
  goal: Goal;
  currUser = JSON.parse(localStorage.getItem('authToken'));
  firstName: string =  this.currUser.firstName;
  userid: number = this.currUser.userId;
  currGoal = JSON.parse(localStorage.getItem('currGoal'));
  goalTitle = this.currGoal.title;
  goalid: number;
  entries: Array<Entry> = [];
  newEntry: Entry =  new Entry();


  constructor(private entryService: EntryServiceService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }

  submitEntry() {
    this.newEntry.goal = JSON.parse(localStorage.getItem('currGoal'));
    this.newEntry.entryId = 10;
    this.goalid = this.newEntry.goal.goalId;
    if (this.newEntry.amount < 1) {
      alert("Entry amount must be more than 0.");
    } else {
      this.entryService.createEntry(this.newEntry)
        .subscribe(data => console.log(data), error => console.log(error));
        this.newEntry = new Entry();
      this.router.navigate(['/all-goals', this.userid]);
    }
  }

}
