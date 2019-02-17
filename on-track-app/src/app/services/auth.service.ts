import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/users/auth';

  constructor(private http: HttpClient) {
  }


  hasUserId(id: number): boolean {
    const tokenId = JSON.parse(localStorage.getItem('authToken')).userId;
    return id === tokenId;
  }

  getLoggedUser() {
    let userJson = localStorage.getItem('authToken');
    if (userJson == null) return null;
    let user = JSON.parse(userJson);
    return user;
  }


  authenticate(email: string, password: string, success, fail) {
    return this.http.post<any>(this.authUrl,
      JSON.stringify({email: email, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .toPromise()
      .then((resp) => {
          localStorage.setItem('authToken', JSON.stringify(resp));
          success();
        },
        (err) => {
          fail(err);
        }
      )
  }
}
