import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { AllGoalsComponent } from './all-goals/all-goals.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { SingleGoalComponent } from './all-goals/single-goal/single-goal.component';
import { HealthTipsComponent } from './health-tips/health-tips.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{path: '', component: LoginComponent},
{path: 'new-user', component: NewUserComponent}, 
{path: 'user-profile/:id', component: UserProfileComponent},
{path: 'new-goal', component: NewGoalComponent},
{path: 'single-goal/:id', component: SingleGoalComponent},
{path: 'goal-detail', component: GoalDetailComponent},
{path: 'all-goals/:id', component: AllGoalsComponent},
{path: 'health-tips', component: HealthTipsComponent} ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
