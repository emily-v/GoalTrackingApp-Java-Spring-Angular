import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from '../model/goals';

@Injectable({
  providedIn: 'root'
})

export class GoalServiceService {
  constructor(private http: HttpClient) { }

  getAllUserGoals(id: number): Observable<Array<Goal>>{
    // const tokenId = JSON.parse(localStorage.getItem('authToken')).userId;
    // console.log(tokenId);
    return this.http.get<Array<Goal>>(`http://localhost:8080/api/goals?userid=${id}`);
  }

  getGoalById(id: number): Observable<Goal> {
    return this.http.get<Goal>(`http://localhost:8080/api/goals/goal?goalid=${id}`);
  }

  createGoal(goal: Goal): Observable<Goal> { 
    return this.http.post<Goal>('http://localhost:8080/api/goals/goal', goal);
  }
 }

