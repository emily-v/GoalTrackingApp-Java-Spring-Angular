import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { AllGoalsComponent } from './all-goals/all-goals.component';
import { SingleGoalComponent } from './all-goals/single-goal/single-goal.component';
import { GoalServiceService } from './services/goal-service.service';
import { HealthTipsComponent } from './health-tips/health-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    UserProfileComponent,
    NewGoalComponent,
    GoalDetailComponent,
    AllGoalsComponent,
    SingleGoalComponent,
    HealthTipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [GoalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
