import { Injectable} from "@angular/core";

import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

 createUser(user: User): Observable<User>{
   return this.http.post<User>("http://localhost:8080/api/users/user",user)
 } 
}
