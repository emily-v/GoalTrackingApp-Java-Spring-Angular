import { Component, OnInit, Input } from '@angular/core';
import { GoalServiceService } from 'src/app/services/goal-service.service';
import { Goal } from 'src/app/model/goals';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'src/app/model/entries';
import { EntryServiceService } from 'src/app/services/entry-service.service';

@Component({
  selector: 'app-single-goal',
  templateUrl: './single-goal.component.html',
  styleUrls: ['./single-goal.component.css']
})
export class SingleGoalComponent implements OnInit {

  goal: Goal;
  currUser = JSON.parse(localStorage.getItem('authToken'));
  firstName: string =  this.currUser.firstName;
  goalid: number;
  entries: Array<Entry> = [];
  todaysEntries: Array<Entry> = [];
  newEntry: Entry =  new Entry();
  sum: number;
  // isLoading: boolean = true;

  constructor(private goalService: GoalServiceService, private entryService: EntryServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.goalid = +this.route.snapshot.paramMap.get('id');
    this.getCurrGoal();

    this.entryService.getAllGoalEntries(this.goalid)
      .subscribe(
        (entries) => this.entries = entries,
        (err) => console.log(err)
      );

    // this.isLoading = false;

    // this.sum = this.getSum();
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.sum = this.getSum();
  //   });
  // }

  getCurrGoal() {
    this.goalService.getGoalById(this.goalid).subscribe((goal: Goal) => {
      this.goal = goal;
    });
  }

  getTodaysEntries() {
    let entryDate: any;
    for (let i = 0; i < this.entries.length; i++) {
      entryDate = this.entries[i].timestamp;
      let entryDateJS = new Date(entryDate);
      let entryDateTrunc = entryDateJS.getMonth() + " " + entryDateJS.getDate() + " " + entryDateJS.getFullYear();
      if (entryDateTrunc === this.getTodaysDate()) {
        this.todaysEntries.push(this.entries[i]);
      }
  }
  return this.todaysEntries;
}

// get truncated date to compare with timestamp from DB
  getTodaysDate() { 
    let today = new Date();
    let todayTrunc = today.getMonth() + " " + today.getDate() + " " + today.getFullYear();
    return todayTrunc;
  }

  // format date for display in view
  showTodaysDate() {
    let today = new Date();
   let date =  (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
   return date;
  }

  // getSum(): string {
  getSum(): number {
    this.sum = 0;

    for (let i = 0; i < this.todaysEntries.length; i++) {
      this.sum += this.todaysEntries[i].amount;
    }

    console.log("sum: " + this.sum);
    return this.sum;
    // return "Today's Progress: " + this.sum + " " + this.goal.unit;
  }

  getProgressMessage(): string {
    if (this.sum == 0) {
      return "Make an entry to start tracking your progress!";
    }
    else if (this.sum < this.goal.target) {
      return 'Almost there! Only ' + (this.goal.target - this.sum) + " " + this.goal.unit + ' more to go!';
    }
    else if (this.sum >= this.goal.target) {
      return "Great job! You've met your target for today!";
    }
  }

}
